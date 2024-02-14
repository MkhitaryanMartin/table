export  class tableTitleDto {
   

    constructor(model){
        this["Select all"] = model["Select all"];
        this["CREATED-ON"]= model["Date created"]
      this["FCUSTBBCODE"] = this["Select all"] ? true : model["Scope/BB Code"];
        this["FCUSTPRODUCTAREA"] =this["Select all"] ? true : model["Product area"];
        this["FIAPCREATEDBY"] =this["Select all"] ? true : model["Created by"] ;
        this["FCUSTCTDTITLE"] =this["Select all"] ? true : model["Report/CTD Title"];
        this["FCUSTCTDCODE"]=this["Select all"] ? true : model["Report/CTD Code"];
        this["FDESCRIPTION"]=model["Description"];
        this["VERSION"]=model["Version"];
        this["FCUSTEFFECTIVEDATE"]= model["Effective date"];
        this["FIAPTEMPLATESTATUS"]= model["Template status"];
        this["FIAPTEMPLATETYPE"]= model["Template type"];
        this["FCUSTTEMPLATESTAGE"]= model["Template stage"];
        this["MODIFIED-ON"]= model["Date modified"];
        this["FCUSTEFFECTIVEVERSION"]= model["Effective version"]
    

    }

}

