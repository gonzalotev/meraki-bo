const getFieldError = (submitCount, touched, errors, name) => (submitCount || !!touched[name] ? errors[name] : undefined);

export default getFieldError;
