'use strict';

angular.module('LpcWebTest2018')
    .run(['LpcTranslateService','RESOURCES',function(LpcTranslateService,RESOURCES){
        //TODO
        //Consume LpcTranslateService service
        LpcTranslateService.setPropertiesUrl(RESOURCES.PROPERTIES_URL);
        LpcTranslateService.loadProperties();
    }]);
