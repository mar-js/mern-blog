export const errorsHandler = ({ statusCode, message }) => {
	const ERROR = new Error();

	ERROR.statusCode = statusCode;
	ERROR.message = message;

	return ERROR;
};
