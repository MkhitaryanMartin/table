export const mapValues = (field) => {
    switch (field.id) {
        case "CREATED-ON":
            return ["Date created", field.values.map(v => v.value).join(', ')];
        case "FDESCRIPTION":
            return ["Description", field.values.map(v => v.value).join(', ')];
        case "VERSION":
            return ["Version", field.values.map(v => v.value).join(', ')];
            case "FCUSTEFFECTIVEDATE":
                return ["Effective date", field.values.map(v => v.value).join(', ')];
        case "FCUSTBBCODE":
            return ["Scope/BB Code", field.values.map(v => v.value?.label).join(', ')];
        case "FCUSTPRODUCTAREA":
            return ["Product area", field.values.map(v => v.value?.label).join(', ')];
        case "FIAPCREATEDBY":
            return ["Created by", field.values.map(v => v.label).join(', ')];
        case "FCUSTCTDTITLE":
            return ["Report/CTD Title", field.values.map(v => v.value).join(', ')];
        case "FCUSTCTDCODE":
            return ["Report/CTD Code", field.values.map(v => v.value).join(', ')];
            case "FIAPTEMPLATESTATUS":
                return ["Template status", field.values.map(v => v.value?.label).join(', ')];
            case "FIAPTEMPLATETYPE":
                return ["Template type", field.values.map(v => v.value?.label).join(', ')];
            case "FCUSTTEMPLATESTAGE":
                return ["Template stage", field.values.map(v => v.value?.label).join(', ')];
            case "MODIFIED-ON":
                return ["Date modified", field.values.map(v => v.value).join(', ')];
            case "FCUSTEFFECTIVEVERSION":
                return ["Effective version", field.values.map(v => v.value).join(', ')];
        default:
            return [field.id, field.values.map(v => v.value?.label).join(', ') || '-'];
    }
}





