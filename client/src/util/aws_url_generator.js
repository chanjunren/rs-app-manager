const AWS = require('aws-sdk');


const getS3AssetUrl = (filename) => {
	const signedUrlExpireSeconds = 1800 * 1; //originally 300(5 minutes), increased to 30minutes
	const s3 = new AWS.S3({
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
		signatureVersion: 'v4',
		//region: 'us-west-2',
		region: 'ap-southeast-1', //changed to singapore aws s3 for quicker loading
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
	});

	return s3.getSignedUrl('getObject', {
		Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
		Key: filename,
		Expires: signedUrlExpireSeconds
	});
};

export default getS3AssetUrl;
