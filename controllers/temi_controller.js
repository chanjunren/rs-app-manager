const HttpError = require('../models/http_error');
const TemiUnit = require('../models/temi_unit');
const Application = require('../models/rs_app');
const mongoose = require('mongoose');

const getAllTemiUnits = async (req, res, next) => {
  let temiUnits;
  try {
    temiUnits = await TemiUnit.find({});
  } catch (err) {
    console.error(err);
    return next(
      new HttpError('Something went wrong while querying the database!', 500),
    );
  }

  res
    .status(201)
    .json({ Units: temiUnits.map((unit) => unit.toObject({ getters: true })) });
};

const addNewTemiUnit = async (req, res, next) => {
  const { owner, serialNumber, applications } = req.body;
  let existingUnit;
  try {
    existingUnit = await TemiUnit.findOne({ serialNumber: serialNumber });
  } catch (err) {
    console.error(err);
    return next(
      new HttpError('Something went wrong while querying the database!', 500),
    );
  }

  if (existingUnit) {
    // console.dir(existingUnit);
    return next(
      new HttpError('A Temi Unit with this serial number already exists!', 409),
    );
  }

  const newUnit = new TemiUnit({
    owner: owner,
    serialNumber: serialNumber,
    applications: applications,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    for (var appId of newUnit.applications) {
      let application = await Application.findById(appId);
      application.units.push(newUnit._id);
      await application.save({ session: session });
    }
    await newUnit.save({ session: session });
    await session.commitTransaction();
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when trying to create this unit! D:',
        500,
      ),
    );
  }
  res.status(201).json({ message: 'Unit succesfully created! :D' });
};

// TO BE FIXED
const updateTemiUnitById = async (req, res, next) => {
  const temiId = req.params.temiId;
  const newValues = req.body;
  let temiSpecified;

  try {
    temiSpecified = await TemiUnit.findById(temiId);
  } catch (err) {
    console.error(err);
    return next(
      new HttpError('Place to be updated could not be found! D:', 404),
    );
  }

  for (var key in newValues) {
    if (!temiSpecified[key]) {
      return next(new HttpError(`Invalid key in update request`, 500));
    }
    temiSpecified[key] = newValues[key];
  }

  try {
    await temiSpecified.save();
    res
      .status(200)
      .json({ updatedTemi: temiSpecified.toObject({ getters: true }) });
  } catch (err) {
    return next(
      new HttpError(
        'Something went wrong while saving the updated unit! D:',
        500,
      ),
    );
  }
};

const deleteTemiUnitById = async (req, res, next) => {
  let temiId = req.params.temiId;
  let temiSpecified;

  try {
    temiSpecified = await TemiUnit.findById(temiId).populate('applications');
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when looking for the unit to be deleted! D:',
        500,
      ),
    );
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await temiSpecified.remove({ session: session });
    for (let application of temiSpecified.applications) {
      application.units.pull(temiSpecified);
      await application.save({ session: session });
    }
    await session.commitTransaction();
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when trying to delete this unit! D:',
        500,
      ),
    );
  }

  res.status(200).json({ 'This item has been deleted! :D': temiSpecified });
};

const checkPermission = async (req, res, next) => {
  let { temiSerialNumber, appId } = req.body;
  let temiUnit;
  try {
    temiUnit = await TemiUnit.findOne({ serialNumber: temiSerialNumber });
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when trying to query this unit! D:',
        500,
      ),
    );
  }

  if (!temiUnit) {
    return next(
      new HttpError(
        'This temi unit is not registered in our database! D:',
        403,
      ),
    );
  }

  for (let app of temiUnit.applications) {

    if (appId === app.toString()) {
      return res.status(200).json({ message: 'Welcome! :D' }); 
    }
  }
  res.status(403).json({message: "Specified app not found in this Temi unit! D:"});
};

exports.getAllTemiUnits = getAllTemiUnits;
exports.addNewTemiUnit = addNewTemiUnit;
exports.updateTemiUnitById = updateTemiUnitById;
exports.deleteTemiUnitById = deleteTemiUnitById;
exports.checkPermission = checkPermission;
