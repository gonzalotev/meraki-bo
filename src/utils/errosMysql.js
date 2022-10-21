/* eslint-disable */

// prettier-ignore
const errorMessage = (message, data = '') => {
  const errors = [
    {
      message: 'insert into \"AUTOFRASES\" (\"CANTIDAD_DE_AGRUPACIONES\", \"CANTIDAD_DE_NOMENCLATURAS\", \"DOMINIO\", \"FECHA_ALTA\", \"FECHA_RETROALIMENTACION\", \"FRASE_ESPECIAL_O_GENERAL\", \"FRASE_ORIGINAL\", \"FRASE_RETROALIMENTADA_SI_NO\", \"ID_AUTOFRASE\", \"ID_DEPENDE_ID_AUTOFRASE\", \"ID_NOMENCLADOR\", \"ID_USUARIO_ALTA\", \"ID_VARIABLE\", \"OBSERVACION\", \"ORDEN\", \"SUPERVISADO\") values (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12, :13, :14, :15, :16) returning \"ID_AUTOFRASE\" into :17 - ORA-20100: TRIG_AUTOFRASES_VALIDAR_PALABRAS. La autofrase contiene palabra/s inexistente/s en el diccionario de palabras. idautofrase, la palabra',
      description: `La autofrase: ${data.originalPhrase} contiene palabra/s inexistente/s en el diccionario de palabras.`,
    },
    {
      message: 'delete from `Horarios` where `IdHorario` = \'14\' - ER_ROW_IS_REFERENCED_2: Cannot delete or update a parent row: a foreign key constraint fails (`meraki2022`.`Asignacion`, CONSTRAINT `fk_Horario` FOREIGN KEY (`IdHorario`) REFERENCES `Horarios` (`IdHorario`))',
      description: 'funco',
    },
  ];
  for (let i = 0; i < errors.length; i += 1) {
    if (message.includes(errors[i].message)) return errors[i].description;
  }
  return 'ERROR: ocurrio un error desconocido, no se cargaron los datos';
};

export default errorMessage;
