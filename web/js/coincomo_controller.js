/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Created by Qian on 11/1/13.
 */

angular.module('ComoModule', [])
    .controller('ComoCtrl', ['$scope', '$window', '$http', '$q', ComoCtrl]);

function ComoCtrl($scope, $window, $http, $q) {

    var id = 0;
    
    $scope.displayMode = "";
    $scope.currentModel = null;

    $scope.system=null;
    $scope.SystemOverviewStyle = 0;
    $scope.addSystemDisplay = 1;

    $scope.subcomponents = [];
    $scope.Component = null;
    $scope.txtSys=null;
    $scope.txtSubSys = null;
    $scope.txtCom = null;
    $scope.txtSubCom = null;


    $scope.systemName = "";
    $scope.btnSubSystemStyle=0;

    $scope.subSystemName="";
    $scope.subSysStyle=0;
    $scope.subSysImgStyle=0;

    $scope.btnSubSysColor="";
    $scope.btnComponentStyle=0;

    $scope.componentName="";
    $scope.comImgStyle=0;
    $scope.componentStyle=0;
    $scope.btnSubComponentStyle=0;

    $scope.subComponentName="";
    $scope.subComImgStyle=0;
    $scope.subComStyle=0;

    $scope.tableStyle=0;
    //$scope.nameStyle=0;
    //$scope.sizeStyle=0;
    //$scope.laborStyle=0;
    //$scope.EAFStyle=0;
    
    
    
    $scope.subComponentDisplay = 0;



    $scope.components = null;


    $scope.buf_name = "";
    $scope.buf_size = 0;
    $scope.buf_labor = 0;
    $scope.buf_language = null;

    $scope.rm_name = "";
    
    
    function system()
    {
        //this.ID = 0;
        this.DatabaseID = 0;
        this.Name = "System1";
        this.SLOC = 11111;
        this.Cost = 11.11;
        this.Staff = 22.22;
        this.Effort = 33.33;
        this.Schedule = 44.44;
        this.SubSystems = [];  
        this.display = 0;
        this.overview = 1;
    }
    
    function subSystem(){
        //this.ID = ID;
        this.DatabaseID = 0;
        this.Name = "subSystem1";
        this.SLOC = 11111;
        this.Cost = 11.11;
        this.Staff = 22.22;
        this.Effort = 33.33;
        this.Schedule = 44.44;
        this.ZoomLevel = 55;
        this.Components = [];
        this.btnDisplay = 0;
        this.overview = 1;
    }

    function Component()
    {
	//this.ID = ID;
	this.DatabaseID = 0;
	this.Name = "Comp1";
        this.SLOC = 11111;
        this.Cost = 11.11;
        this.Staff = 22.22;
        this.Effort = 33.33;
        this.Schedule = 44.44;
	this.Productivity = 55.55;
	this.InstructionCost = 66.66;
	this.Risk = 0;
	this.ParametersSettings = {
            "EffortAdjustmentFactors": {
                "RELY": {
                    "VLO": 0.01,
                    "LO": 0.02,
                    "NOM": 0.03,
                    "HI": 0.04,
                    "VHI": 0.05,
                    "XHI": 0.06
                },
                "DATA": {
                    "VLO": 0.11,
                    "LO": 0.12,
                    "NOM": 0.13,
                    "HI": 0.14,
                    "VHI": 0.15,
                    "XHI": 0.16
                },
                "DOCU": {
                    "VLO": 0.21,
                    "LO": 0.22,
                    "NOM": 0.23,
                    "HI": 0.24,
                    "VHI": 0.25,
                    "XHI": 0.26
                },
                "CPLX": {
                    "VLO": 0.31,
                    "LO": 0.32,
                    "NOM": 0.33,
                    "HI": 0.34,
                    "VHI": 0.35,
                    "XHI": 0.36
                },
                "RUSE": {
                    "VLO": 0.41,
                    "LO": 0.42,
                    "NOM": 0.43,
                    "HI": 0.44,
                    "VHI": 0.45,
                    "XHI": 0.46
                },
                "TIME": {
                    "VLO": 0.51,
                    "LO": 0.52,
                    "NOM": 0.53,
                    "HI": 0.54,
                    "VHI": 0.55,
                    "XHI": 0.56
                },
                "STOR": {
                    "VLO": 0.61,
                    "LO": 0.62,
                    "NOM": 0.63,
                    "HI": 0.64,
                    "VHI": 0.65,
                    "XHI": 0.66
                },
                "PVOL": {
                    "VLO": 0.71,
                    "LO": 0.72,
                    "NOM": 0.73,
                    "HI": 0.74,
                    "VHI": 0.75,
                    "XHI": 0.76
                },
                "ACAP": {
                    "VLO": 0.81,
                    "LO": 0.82,
                    "NOM": 0.83,
                    "HI": 0.84,
                    "VHI": 0.85,
                    "XHI": 0.86
                },
                "APEX": {
                    "VLO": 0.91,
                    "LO": 0.92,
                    "NOM": 0.93,
                    "HI": 0.94,
                    "VHI": 0.95,
                    "XHI": 0.96
                },
                "PCAP": {
                    "VLO": 1.01,
                    "LO": 1.02,
                    "NOM": 1.03,
                    "HI": 1.04,
                    "VHI": 1.05,
                    "XHI": 1.06
                },
                "PLEX": {
                    "VLO": 1.11,
                    "LO": 1.12,
                    "NOM": 1.13,
                    "HI": 1.14,
                    "VHI": 1.15,
                    "XHI": 1.16
                },
                "LTEX": {
                    "VLO": 1.21,
                    "LO": 1.22,
                    "NOM": 1.23,
                    "HI": 1.24,
                    "VHI": 1.25,
                    "XHI": 1.26
                },
                "PCON": {
                    "VLO": 1.31,
                    "LO": 1.32,
                    "NOM": 1.33,
                    "HI": 1.34,
                    "VHI": 1.35,
                    "XHI": 1.36
                },
                "TOOL": {
                    "VLO": 1.41,
                    "LO": 1.42,
                    "NOM": 1.43,
                    "HI": 1.44,
                    "VHI": 1.45,
                    "XHI": 1.46
                },
                "SITE": {
                    "VLO": 1.61,
                    "LO": 1.62,
                    "NOM": 1.63,
                    "HI": 1.64,
                    "VHI": 1.65,
                    "XHI": 1.66
                },
                "USR1": {
                    "VLO": 1.71,
                    "LO": 1.72,
                    "NOM": 1.73,
                    "HI": 1.74,
                    "VHI": 1.75,
                    "XHI": 1.76
                },
                "USR2": {
                    "VLO": 1.81,
                    "LO": 1.82,
                    "NOM": 1.83,
                    "HI": 1.84,
                    "VHI": 1.85,
                    "XHI": 1.86
                },
                "SCED": {
                    "VLO": 1.51,
                    "LO": 1.52,
                    "NOM": 1.53,
                    "HI": 1.54,
                    "VHI": 1.55,
                    "XHI": 1.56
                },
               para_EAF_display:0,
               para_EAF_product_display:0,
               para_EAF_platform_display:0,
               para_EAF_personnel_display:0,
               para_EAF_project_display:0,
               para_EAF_user_defined_display:0
            },
            "ScaleFactors": {
                "PREC": {
                    "VLO": 2.01,
                    "LO": 2.02,
                    "NOM": 2.03,
                    "HI": 2.04,
                    "VHI": 2.05,
                    "XHI": 2.06
                },
                "FLEX": {
                    "VLO": 2.11,
                    "LO": 2.12,
                    "NOM": 2.13,
                    "HI": 2.14,
                    "VHI": 2.15,
                    "XHI": 2.16
                },
                "RESL": {
                    "VLO": 2.21,
                    "LO": 2.22,
                    "NOM": 2.23,
                    "HI": 2.24,
                    "VHI": 2.25,
                    "XHI": 2.26
                },
                "TEAM": {
                    "VLO": 2.31,
                    "LO": 2.32,
                    "NOM": 2.33,
                    "HI": 2.34,
                    "VHI": 2.35,
                    "XHI": 2.36
                },
                "PMAT": {
                    "VLO": 2.41,
                    "LO": 2.42,
                    "NOM": 2.43,
                    "HI": 2.44,
                    "VHI": 2.45,
                    "XHI": 2.46
                },
                para_scale_factor_display:0
            },
            "EquationEditor": {
                "EffortEstimationParameterA": 3.01,
                "ExponentParameterB": 3.02,
                "ScheduleEstimationParameterC": 3.03,
                "ScheduleEstimationParameterD": 3.04,
                 para_equation_editor_display:0
            },
            "FunctionPoints": {
                "InternalLogicalFiles": {
                    "Low": 401,
                    "Average": 402,
                    "High": 403
                },
                "ExternalInterfaceFiles": {
                    "Low": 411,
                    "Average": 412,
                    "High": 413
                },
                "ExternalInputs": {
                    "Low": 421,
                    "Average": 422,
                    "High": 423
                },
                "ExternalOutputs": {
                    "Low": 431,
                    "Average": 432,
                    "High": 433
                },
                "ExternalInquiries": {
                    "Low": 441,
                    "Average": 442,
                    "High": 443
                },
                 para_function_points_display:0
                
            },
            "PersonMonth": {
                "HoursPerPM": 501.1,
                para_person_month_display:0
            }
        };
	this.ScaleFactor = 12.34;
	this.ScaleFactorsSettings = {
		"PREC": {
                "Rating": "NOM",
                "Increment": "25%"
            },
            "FLEX": {
                "Rating": "NOM",
                "Increment": "25%"
            },
            "RESL": {
                "Rating": "NOM",
                "Increment": "0%"
            },
            "TEAM": {
                "Rating": "NOM",
                "Increment": "0%"
            },
            "PMAT": {
                "Rating": "NOM",
                "Increment": "0%"
            }
        };
	this.ScheduleFactor = 2.3;
	this.SchedulePercentFactor = 160;
	this.ScheduleSettings = {
		"SCED": {
              "Rating": "VLO",
              "Increment": "50%"
            }
        };
	this.COPSEMO = {
		"Inception": {
            "EffortPercentage": 11,
            "SchedulePercentage": 11.5,
            "Effort": 1.11,
            "Month": 2.22,
            "Personnel": 3.33
        },
        "Elaboration": {
            "EffortPercentage": 22.5,
            "SchedulePercentage": 33.5,
            "Effort": 4.44,
            "Month": 5.55,
            "Personnel": 6.66
        },
        "Construction": {
            "EffortPercentage": 77.5,
            "SchedulePercentage": 66.5,
            "Effort": 7.77,
            "Month": 8.88,
            "Personnel": 9.99
        },
        "Transition": {
            "EffortPercentage": 13.5,
            "SchedulePercentage": 14,
            "Effort": 10.1,
            "Month": 11.11,
            "Personnel": 12.12
        }
	};
	this.MultiBuildShift = 111;
	this.SubComponents = [];
	this.overview = 1;
	this.scheDisplay = 0;
	this.scaleDisplay = 0;
	this.copsemo_display = 0;
	this.parameters_display = 0;
    }


    function subComponent(){
        this.DatabaseID=0;
        this.Name = "subComponent1";
        this.SLOC = 1111;
        this.Cost = 22.22;
        this.Staff = 33.33;
        this.Effort = 44.44;
        this.Schedule = 55.55;
        this.Productivity = 66.66;
        this.InstructionCost = 77.77;
        this.Risk = 88.8;
        this.NominalEffort = 99.99;
        this.EstimatedEffort = 10.1;
        this.SLOCWithoutREVL = 12121;
        this.LaborRate = 111.1;
        this.Language = "C++";
        this.EAF = 1.23;
        this.EAFSettings = {
            "RELY": {
                    "Rating": "NOM",
                    "Increment": "25%"
            },
            "DATA": {
                    "Rating": "NOM",
                    "Increment": "25%"
            },
            "DOCU": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "CPLX": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "RUSE": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "TIME": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "STOR": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "PVOL": {
                    "Rating": "NOM",
                    "Increment": "0%"
            }, 
            "ACAP": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "APEX": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "PCAP": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "PLEX": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "LTEX": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "PCON": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "TOOL": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "SITE": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "USR1": {
                    "Rating": "NOM",
                    "Increment": "0%"
            },
            "USR2": {
                    "Rating": "NOM",
                    "Increment": "0%"
            }
         };
        this.Breakage = 1.1;
        this.New = {
            "NewSLOC": 11111
            };
        this.FunctionPoints = {
            "Multiplier": 1,
            "RatioType": "Jones",
            "CalculationMethod": "UsingTable",
            "FunctionTypes": {
                "InternalLogicalFiles": {
                        "Low": 1,
                        "Average": 2,
                        "High": 3,
                        "SubTotal": 4
                },
                "ExternalInterfaceFiles": {
                        "Low": 5,
                        "Average": 6,
                        "High": 7,
                        "SubTotal": 8
                },
                "ExternalInputs": {
                        "Low": 9,
                        "Average": 10,
                        "High": 11,
                        "SubTotal": 12
                },
                "ExternalOutputs": {
                        "Low": 13,
                        "Average": 14,
                        "High": 15,
                        "SubTotal": 16
                },
                "ExternalInquiries": {
                        "Low": 17,
                        "Average": 18,
                        "High": 19,
                        "SubTotal": 20
                }
            },
            "TotalUnadjustedFunctionPoints": 21,
            "EquivalentSLOC": 20202
        };
        this.nameDisplay = 0;
        this.sizeDisplay = 0;
        this.laborRateDisplay = 0;
        this.EAFDisplay = 0;
        this.newDisplay = 1;
        this.functionPointDisplay = 0;
        this.adaptationReuseDisplay = 0;
        this.AdaptationAndReuse=[];
        this.x = 0;
    };
    
    function ReuseModel()
    {
        this.DatabaseID=0;
        this.Name = "Adaptation1";
        this.AdaptedSLOC = 22222;
        this.DesignModified = 11.11;
        this.CodeModified = 22.22;
        this.IntegrationModified = 33.33;
        this.SoftwareUnderstanding = 44.44;
        this.AssessmentAndAssimilation = 5.55;
        this.UnfamiliarityWithSoftware = 0.66;
        this.AutomaticallyTranslated = 77.77;
        this.AutomaticTranslationProductivity = 8888.8;
        this.AdaptationAdjustmentFactor = 9.9;
        this.EquivalentSLOC = 10101;
        
        this.nameDisplay = 0;
        this.parameterDisplay = 0;
        this.x = 0;
    };
    
    $scope.changeSubSystem = function(subSystem){
        
        if($scope.displayMode === "component")
        {
             $scope.currentModel.copsemo_display = 0;
             $scope.currentModel.parameters_display = 0;
        }
            
        $scope.currentModel.overview = 0;
     //   $scope.system.overview = 0;

//        for(var i = 0; i<($scope.system.subSystems.length); i++)
//        {
//            $scope.system.subSystems[i].display = 0;
//        }
//
//        for(var i = 0; i<($scope.system.subSystems.length); i++)
//        {
//               for(var j = 0; j<($scope.system.subSystems[i].components.length); j++)
//               {
//                   $scope.system.subSystems[i].components[j].overview = 0;
//                   $scope.system.subSystems[i].components[j].copsemo = 0;
//               }
//        }


        $scope.displayMode = "subSystem";
        $scope.currentModel = subSystem ;
        $scope.currentModel.overview = 1;


    };

    $scope.Post = function()
    {
        GetConnection();
        $scope.system = $scope.data.System[0];
    };

    $scope.showSystemOverview = function(system)
    {
        if($scope.displayMode === "component")
        {
             $scope.currentModel.copsemo_display = 0;
             $scope.currentModel.parameters_display = 0;
        }
        
        $scope.currentModel.overview = 0;
        $scope.displayMode = "system";
        $scope.currentModel = system;
        $scope.currentModel.overview = 1;
    };

    $scope.addSystem = function() {

        
        $scope.btnOKStyle=0;

        //定义另外一个变量控制是不是显示overview
        //$scope.txtSys=$scope.data.systems[0].Name;
        //$scope.system = {name:$scope.data.systems[0].Name,size:0,cost:0,staff:0,effort:0,schedule:0,subSystems:[],display:0,overview:1};
        $scope.system = new system();
        $scope.system.Name = $scope.txtSys;
        $scope.addSystemDisplay=0;

        $scope.currentModel = $scope.system;
        $scope.displayMode = "system";
        //alert($scope.system);
       

    };

    $scope.addSubSystem = function(){
         $scope.subSysStyle=1;
    };

    $scope.updateSubSystem = function(system){
        
        //var subsystem = $scope.data.systems[0].subSystems[0];
        $scope.currentModel.overview = 0;

        //$scope.subSystemName=$scope.txtSubSys;
        $scope.subSysStyle=0;
        $scope.btnComponentStyle=1;
        var newSubSystem = new subSystem();
        newSubSystem.Name = $scope.txtSubSys;
        system.SubSystems.push(newSubSystem);       
        $scope.txtSubSys="";

        $scope.currentModel = newSubSystem;
        $scope.displayMode = "subSystem";

    };


    $scope.addSubComponent = function(){
        $scope.subComponentDisplay = 1;
        $scope.subComImgStyle=1;
        $scope.subComStyle=1;
    };

    //$scope.updateSubComponent = function(){
    //    $scope.SubComponentName=$scope.txtSubCom;
    //   $scope.subComStyle="display:none";
    //   $scope.btnAddSubCom="display:none";
    //   $scope.btnSubComponentStyle="display;";
    //};

    $scope.updateSubComponent = function(component,txtSubCom)
    {
        //$scope.subComponentName=$scope.subComTxt;
        //$scope.subComName=txtSubCom;
        
        var newSubComponent = new subComponent();
        newSubComponent.Name = txtSubCom;
        component.SubComponents.push(newSubComponent);
        
        
        //alert($scope.subcomponents.length);
        //$scope.txtSubCom = "";
        $scope.subComStyle=0;
        $scope.subComImgStyle=0;
        if(component.SubComponents.length>0) $scope.tableStyle=1;
        $scope.subComponentDisplay = 0;
        $scope.txtSubCom = "";

    };

    $scope.deleteSubComponent = function(component)
    {
        var oldSubComponent = component.SubComponents;
        component.SubComponents = [];
        angular.forEach(oldSubComponent,function(subComponent){
            if(!subComponent.x) component.SubComponents.push(subComponent);
        });

    };

    $scope.editName = function(subComponent)
    {
        //alert("123");
        $scope.buf_name = subComponent.name;
        subComponent.nameDisplay = 1;

    };

    $scope.updateName = function(subComponent,var1)
    {
        if(var1=='Cancel')
        {
            subComponent.name = $scope.buf_name;
        }
        subComponent.nameDisplay = 0;
    };

    $scope.editSize = function(subComponent)
    {
        $scope.buf_size = subComponent.size;
        $scope.buf_language = subComponent.language;
        subComponent.sizeDisplay=1;

    };

    $scope.updateSize = function(subComponent,var1)
    {
        //subComponent.size = sizeTxt;
        //$scope.sizeTxt = subComponent.size;
        //$scope.sizeStyle = 0;
//        for(var i = 0; i<$scope.system.subSystems.size();i++)
//        {
//            for(var j = 0; j<$scope.system.subSystems[i].components.size(); j++)
//            {
//                for(var k = 0; k<$scope.system.subSystems[i].components[j].subcomponents.size(); k++)
//                {
//                    $scope.system.size+=$scope.system.subSystems[i].components[j].subcomponents[k].size;
//                }
//            }
//        }
        if(var1 === 'Cancel')
        {
            subComponent.size = $scope.buf_size;
            subComponent.language = $scope.buf_language;
        }
        subComponent.sizeDisplay = 0;

    };

    $scope.addReuseModule = function(subComponent)
    {
        var newReuseModel = new ReuseModel();
        subComponent.AdaptationAndReuse.push(newReuseModel);
    };

    $scope.deleteReuseModel = function(subComponent)
    {
        var oldReuseModel = subComponent.AdaptationAndReuse;
        subComponent.AdaptationAndReuse = [];
        angular.forEach(oldReuseModel,function(rm){
            if(!rm.x) subComponent.AdaptationAndReuse.push(rm);
        });

    };


    $scope.editRmName = function(rm)
    {
        $scope.rm_name = rm.Name;
        rm.nameDisplay = 1;
    };

    $scope.updateRmName = function(rm, var1)
    {
        if(var1 === 'Cancel')
        {
            rm.Name = $scope.rm_name;
        }
        rm.nameDisplay = 0;

    };

    $scope.editRmParameter = function(rm)
    {
        rm.parameterDisplay = 1;
    };

    $scope.updateRmParameter = function(rm)
    {
        rm.parameterDisplay = 0;
    };

    $scope.editLaborRate = function(subComponent)
    {
        $scope.buf_labor = subComponent.LaborRate;
        subComponent.laborRateDisplay=1;

    };

    $scope.updateLaborRate = function(subComponent,var1)
    {
        if(var1 === 'Cancel')
        {
            subComponent.LaborRate = $scope.buf_labor;
        }
        subComponent.laborRateDisplay=0;
    };

    $scope.editEAF = function(subComponent)
    {
        subComponent.EAFDisplay=1;
        $scope.buf = subComponent;

    };

    $scope.updateEAF = function(subComponent)
    {
        subComponent.EAFDisplay=0;
    };

    $scope.error = null;
    $scope.schedule = null;
    $scope.scaleFactor = null;

    $scope.copsemo = null;
    $scope.overview =null;


    $scope.ratings =
    [
        "VLO",
        "LO",
        "NOM",
        "HI",
        "VHI",
        "XHI"
    ];

    $scope.increments =
    [
        "0%",
        "25%",
        "50%",
        "75%"
    ];

    $scope.cops = {
        eff_values:[6.0,24.0,76.0,12.0],
        sch_values:[2.0,37.5,62.5,12.5]
    };

    $scope.scale_factors= {
        PREC:{
            vlo:6.2,
            lo:4.96,
            nom:3.72,
            hi:2.48,
            vhi:1.24,
            xhi:0.0
        },
        FLEX:{
            vlo:5.07,
            lo:4.05,
            nom:3.04,
            hi:2.03,
            vhi:1.01,
            xhi:0.0
        },
        RESL:{
            vlo:7.07,
            lo:5.65,
            nom:4.24,
            hi:2.83,
            vhi:1.41,
            xhi:0.0
        },
        TEAM:{
            vlo:5.48,
            lo:4.38,
            nom:3.29,
            hi:2.19,
            vhi:1.1,
            xhi:0.0
        },
        PMAT:{
            vlo:7.8,
            lo:6.24,
            nom:4.68,
            hi:3.12,
            vhi:1.56,
            xhi:0.0
        }
    };

    $scope.equation_editor = {
        equation_p:2.94,
        equation_e:0.91,
        equation_t:3.67,
        equation_f:0.28
    };
    $scope.function_points = {
        FILE:{
            low: 7,
            average:10,
            high:15
        },
        INTERFACE:{
            low: 5,
            average:7,
            high:10
        },
        INPUT:{
            low: 3,
            average:4,
            high:6
        },
        OUTPUT:{
            low: 4,
            average:5,
            high:7
        },
        INQUIRES:{
            low: 3,
            average:4,
            high:6
        }
    };

    $scope.EAF_product={
        rely:{
            vlo:0.82,
                lo:0.92,
                nom:1.0,
                hi:1.1,
                vhi:1.26,
                xhi:0.0
        },
        data:{
            vlo:0.0,
                lo:0.90,
                nom:1.0,
                hi:1.14,
                vhi:1.28,
                xhi:0.0
        },
        docu:{
            vlo:0.81,
                lo:0.91,
                nom:1.0,
                hi:1.11,
                vhi:1.23,
                xhi:0.0
        },
        cplx:{
            vlo:0.73,
                lo:0.87,
                nom:1.0,
                hi:1.17,
                vhi:1.34,
                xhi:1.74
        },
        ruse:{
            vlo:0.0,
                lo:0.95,
                nom:1.0,
                hi:1.07,
                vhi:1.15,
                xhi:1.24
        }

    };

    $scope.EAF_platform = {
        time:{
            vlo:0.0,
                lo:0.0,
                nom:1.0,
                hi:1.11,
                vhi:1.29,
                xhi:1.63
        },
        stor:{
            vlo:0.0,
                lo:0.0,
                nom:1.0,
                hi:1.05,
                vhi:1.17,
                xhi:1.46
        },
        pvol:{
            vlo:0.0,
                lo:0.87,
                nom:1.0,
                hi:1.15,
                vhi:1.3,
                xhi:0.0
        }
    };
    
    

    $scope.EAF_personnel = {
        acap:{
            vlo:1.42,
                lo:1.19,
                nom:1.0,
                hi:0.85,
                vhi:0.71,
                xhi:0.0
        },
        apex:{
            vlo:1.22,
                lo:1.1,
                nom:1.0,
                hi:0.88,
                vhi:0.81,
                xhi:0.0
        },
        pcap:{
            vlo:1.34,
                lo:1.15,
                nom:1.0,
                hi:0.88,
                vhi:0.76,
                xhi:0.0
        },
        plex:{
            vlo:1.19,
                lo:1.09,
                nom:1.0,
                hi:0.91,
                vhi:0.84,
                xhi:0.0
        },
        ltex:{
            vlo:1.2,
                lo:1.09,
                nom:1.0,
                hi:0.91,
                vhi:0.84,
                xhi:0.0
        },
        pcon:{
            vlo:1.29,
                lo:1.12,
                nom:1.0,
                hi:0.9,
                vhi:0.81,
                xhi:0.0
        }
    };
    

    $scope.EAF_project = {
        tool:{
            vlo:1.17,
                lo:1.09,
                nom:1.0,
                hi:0.9,
                vhi:0.78,
                xhi:0.0
        },
        site:{
            vlo:1.22,
                lo:1.09,
                nom:1.0,
                hi:0.93,
                vhi:0.86,
                xhi:0.8
        },
        sced:{
            vlo:1.43,
                lo:1.14,
                nom:1.0,
                hi:1.0,
                vhi:1.0,
                xhi:0.0
        }
    };
    
    $scope.EAF_user_defined = {
        usr1:{
            vlo:1.0,
                lo:1.0,
                nom:1.0,
                hi:1.0,
                vhi:1.0,
                xhi:1.0
        },
        usr2:{
            vlo:1.0,
                lo:1.0,
                nom:1.0,
                hi:1.0,
                vhi:1.0,
                xhi:1.0
        }
    };
    
    $scope.languages =
    [
        "Non-specified",
        "Access",
        "Ada 83",
        "Ada 95",
        "C++"
    ];

    $scope.actions =  [
        {value:"0",option:"-- MORE ACTIONS...--"},
        {value:"1",option:"Select All"},
        {value:"2",option:"Toggle"},
        {value:"3",option:"Unselected All"},
        {value:"4",option:"Copy"},
        {value:"5",option:"Paste"}
    ];

   $scope.moreActions = $scope.actions[0];


function updateSystem()
{
     alert("in update");
     //$scope.Rawdata = JSON.stringify($scope.data.System[0].Name);
     //alert($scope.Rawdata);
     $scope.data.System[0].Name += "_Updated";
     alert($scope.data.System[0].Name);
     alert("out");
};
    

function GetConnection() {
      
    $scope.SystemInput = {
        System:  $scope.system
    };
    var inputJson = angular.toJson($scope.SystemInput);
    console.log(inputJson);
    
    var config = {
        method: 'POST',
        url: 'rest/api',
        data: inputJson
    };      
    /** @type {HttpPromise} */
    var httpPromise = $http(config);
    
    httpPromise
        .success(function(data, status, headers, config) {
            console.log('There\'s no problem.');
            console.log('Status: ' + status);
            console.log('Response: '+ JSON.stringify(data));
            
            if (data['response']['success']) {
                $scope.data = data.data;
                //alert("Succeed");
                console.log(JSON.stringify($scope.data));
                //alert("Finished");
                updateSystem();
                alert("updated");
            } else {
                alert("Response Error");
                $scope.error = JSON.stringify(data);
                console.log($scope.error);
            }
        })
        .error(function(data, status, headers, config) {
            
            console.log('There\'s a problem!');
            console.log('Status: ' + status);
            console.log('Response: '+ data);
            $scope.error = JSON.stringify(data);
            alert("Error");
            alert($scope.error);
        });
        
}

    


    $scope.changeAction = function(action,component)
    {
        if(action.value === "1" )
        {
            for(var i = 0; i<component.subComponents.length; i++)
            {
                component.subComponents[i].x = 1;
            }
        }

        else if(action.value === "2" )
        {
            for(var i = 0; i<component.subComponents.length; i++)
            {
                if(component.subComponents[i].x == 1)
                {
                    component.subComponents[i].x = 0;
                }
                else
                {
                    component.subComponents[i].x = 1;
                }
            }
        }

        else if(action.value === "3" )
        {
            for(var i = 0; i<component.subComponents.length; i++)
            {
                component.subComponents[i].x = 0;
            }

        }

        else if(action.value === "4" )
        {

        }
        else if(action.value === "5" )
        {

        }


    }

//    $scope.rating1 = $scope.ratings[2];
//    $scope.rating2 = $scope.ratings[2];
//    $scope.rating3 = $scope.ratings[2];
//    $scope.rating4 = $scope.ratings[2];
//    $scope.rating5 = $scope.ratings[2];
//
//    $scope.incr1 = $scope.increments[0];
//    $scope.incr2 = $scope.increments[0];
//    $scope.incr3 = $scope.increments[0];
//    $scope.incr4 = $scope.increments[0];
//    $scope.incr5 = $scope.increments[0];
//
//    $scope.platformRating1 = $scope.ratings[2];
//    $scope.platformRating2 = $scope.ratings[2];
//    $scope.platformRating3 = $scope.ratings[2];
//
//    $scope.platformIncr1 = $scope.increments[0];
//    $scope.platformIncr2 = $scope.increments[0];
//    $scope.platformIncr3 = $scope.increments[0];
//
//    $scope.personnelRating1 = $scope.ratings[2];
//    $scope.personnelRating2 = $scope.ratings[2];
//    $scope.personnelRating3 = $scope.ratings[2];
//    $scope.personnelRating4 = $scope.ratings[2];
//    $scope.personnelRating5 = $scope.ratings[2];
//    $scope.personnelRating6 = $scope.ratings[2];
//
//    $scope.personnelIncr1 = $scope.increments[0];
//    $scope.personnelIncr2 = $scope.increments[0];
//    $scope.personnelIncr3 = $scope.increments[0];
//    $scope.personnelIncr4 = $scope.increments[0];
//    $scope.personnelIncr5 = $scope.increments[0];
//    $scope.personnelIncr6 = $scope.increments[0];
//
//    $scope.projectRating1 = $scope.ratings[2];
//    $scope.projectRating2 = $scope.ratings[2];
//    $scope.userRating1 = $scope.ratings[2];
//    $scope.userRating2 = $scope.ratings[2];
//
//    $scope.projectIncr1 = $scope.increments[0];
//    $scope.projectIncr2 = $scope.increments[0];
//    $scope.userIncr1 = $scope.increments[0];
//    $scope.userIncr2 = $scope.increments[0];



//    $scope.schedule_rating = $scope.ratings[2];
//    $scope.schedule_increment = $scope.increments[0];
//    $scope.prec_rating = $scope.ratings[2];
//    $scope.prec_increment = $scope.increments[0];
//    $scope.flex_rating = $scope.ratings[2];
//    $scope.flex_increment = $scope.increments[0];
//    $scope.resl_rating = $scope.ratings[2];
//    $scope.resl_increment = $scope.increments[0];
//    $scope.team_rating = $scope.ratings[2];
//    $scope.team_increment = $scope.increments[0];
//    $scope.pmap_rating = $scope.ratings[2];
//    $scope.pmap_increment = $scope.increments[0];


    $scope.addComponent = function(subSystem)
    {
        subSystem.btnDisplay=1;
    };

    $scope.updateComponent = function(subSystem,txtCom) {
        $scope.currentModel.overview = 0;
        //$scope.displayMode = "component";

        //var component = $scope.data.systems[0].subSystems[0].components[0];
        
        var newComponent = new Component();
       
        newComponent.Name = txtCom;
        
        subSystem.Components.push(newComponent);
        
        subSystem.btnDisplay=0;
        
        
        $scope.txtCom = "";
        $scope.currentModel = newComponent;
        $scope.displayMode = "component";
    };

     $scope.showPanel = function(val1,val2){


        $scope.currentModel.overview = 0;
        $scope.currentModel.copsemo_display = 0;
        $scope.currentModel.parameters_display = 0;


        if(val1 === "overview"){
            val2.overview = 1;
            val2.copsemo_display = 0;
            val2.parameters_display = 0;
        }
        if(val1 === "copsemo"){
            val2.overview = 0;
            val2.parameters_display = 0;
            val2.copsemo_display = 1;
        }
        if(val1 === "parameters"){
            val2.overview = 0;
            val2.copsemo_display = 0;
            val2.parameters_display = 1;
        }


        $scope.displayMode = "component";
        $scope.currentModel = val2;
    };


    $scope.scalFactor = function(val1,val2){
        if(val1 === 'open')
        {
            val2.scaleDisplay=1;
        }
        if(val1 === 'finish')
        {
            val2.scaleDisplay = 0;
        }

    };

    $scope.schedulefunc = function(val1,val2){
        if(val1 === 'open')
        {
            val2.scheDisplay = 1;
        }
        if(val1 === 'finish')
        {
            val2.scheDisplay = 0;
        }
    };


    $scope.empty = function(val,comp) {
        if(val === "schedule"){
            comp.ScheduleSettings.SCED.Rating = $scope.ratings[2];
            comp.ScheduleSettings.SCED.Increment = $scope.increments[0];
        }

        if(val === "scale"){

            comp.ScaleFactorsSettings.PREC.Rating = $scope.ratings[2];
            comp.ScaleFactorsSettings.PREC.Increment = $scope.increments[0];
            comp.ScaleFactorsSettings.FLEX.Rating = $scope.ratings[2];
            comp.ScaleFactorsSettings.FLEX.Increment = $scope.increments[0];
            comp.ScaleFactorsSettings.RESL.Rating = $scope.ratings[2];
            comp.ScaleFactorsSettings.RESL.Increment = $scope.increments[0];
            comp.ScaleFactorsSettings.TEAM.Rating = $scope.ratings[2];
            comp.ScaleFactorsSettings.TEAM.Increment = $scope.increments[0];
            comp.ScaleFactorsSettings.PMAT.Rating = $scope.ratings[2];
            comp.ScaleFactorsSettings.PMAT.Increment = $scope.increments[0];
        }
        if(val === "subComponent_EAF"){

            comp.RELY.Rating = $scope.ratings[2];
            comp.DATA.Rating = $scope.ratings[2];
            comp.DOCU.Rating = $scope.ratings[2];
            comp.CPLX.Rating = $scope.ratings[2];
            comp.RUSE.Rating = $scope.ratings[2];

            comp.RELY.Increment = $scope.increments[0];
            comp.DATA.Increment = $scope.increments[0];
            comp.DOCU.Increment = $scope.increments[0];
            comp.CPLX.Increment = $scope.increments[0];
            comp.RUSE.Increment = $scope.increments[0];

            comp.TIME.Rating = $scope.ratings[2];
            comp.STOR.Rating = $scope.ratings[2];
            comp.PVOL.Rating = $scope.ratings[2];

            comp.TIME.Increment = $scope.increments[0];
            comp.STOR.Increment = $scope.increments[0];
            comp.PVOL.Increment = $scope.increments[0];

            comp.ACAP.Rating = $scope.ratings[2];
            comp.APEX.Rating = $scope.ratings[2];
            comp.PCAP.Rating = $scope.ratings[2];
            comp.PLEX.Rating = $scope.ratings[2];
            comp.LTEX.Rating = $scope.ratings[2];
            comp.PCON.Rating = $scope.ratings[2];

            comp.ACAP.Increment = $scope.increments[0];
            comp.APEX.Increment = $scope.increments[0];
            comp.PCAP.Increment = $scope.increments[0];
            comp.PLEX.Increment = $scope.increments[0];
            comp.LTEX.Increment = $scope.increments[0];
            comp.PCON.Increment = $scope.increments[0];

            comp.TOOL.Rating = $scope.ratings[2];
            comp.SITE.Rating = $scope.ratings[2];

            comp.TOOL.Increment = $scope.increments[0];
            comp.SITE.Increment = $scope.increments[0];

            comp.USR1.Rating = $scope.ratings[2];
            comp.USR2.Rating = $scope.ratings[2];

            comp.USR1.Increment = $scope.increments[0];
            comp.USR2.Increment = $scope.increments[0];

        }

       if(val === 'parameter_scale_factor'){

            comp.PREC.VLO =$scope.scale_factors.PREC.vlo;
            comp.PREC.LO =$scope.scale_factors.PREC.lo;
            comp.PREC.NOM =$scope.scale_factors.PREC.nom;
            comp.PREC.HI =$scope.scale_factors.PREC.hi;
            comp.PREC.VHI = $scope.scale_factors.PREC.vhi;
            comp.PREC.XHI = $scope.scale_factors.PREC.xhi;
            comp.FLEX.VLO =$scope.scale_factors.FLEX.vlo;
            comp.FLEX.LO =$scope.scale_factors.FLEX.lo;
            comp.FLEX.NOM =$scope.scale_factors.FLEX.nom;
            comp.FLEX.HI =$scope.scale_factors.FLEX.hi;
            comp.FLEX.VHI = $scope.scale_factors.FLEX.vhi;
            comp.FLEX.XHI = $scope.scale_factors.FLEX.xhi;
            comp.RESL.VLO =$scope.scale_factors.RESL.vlo;
            comp.RESL.LO =$scope.scale_factors.RESL.lo;
            comp.RESL.NOM =$scope.scale_factors.RESL.nom;
            comp.RESL.HI =$scope.scale_factors.RESL.hi;
            comp.RESL.VHI = $scope.scale_factors.RESL.vhi;
            comp.RESL.XHI = $scope.scale_factors.RESL.xhi;
            comp.TEAM.VLO =$scope.scale_factors.TEAM.vlo;
            comp.TEAM.LO =$scope.scale_factors.TEAM.lo;
            comp.TEAM.NOM =$scope.scale_factors.TEAM.nom;
            comp.TEAM.HI =$scope.scale_factors.TEAM.hi;
            comp.TEAM.VHI = $scope.scale_factors.TEAM.vhi;
            comp.TEAM.XHI = $scope.scale_factors.TEAM.xhi;
            comp.PMAT.VLO =$scope.scale_factors.PMAT.vlo;
            comp.PMAT.LO =$scope.scale_factors.PMAT.lo;
            comp.PMAT.NOM =$scope.scale_factors.PMAT.nom;
            comp.PMAT.HI =$scope.scale_factors.PMAT.hi;
            comp.PMAT.VHI = $scope.scale_factors.PMAT.vhi;
            comp.PMAT.XHI = $scope.scale_factors.PMAT.xhi;


        }

        if(val === 'parameter_equation_editor'){
            comp.EffortEstimationParameterA =$scope.equation_editor.equation_p;
            comp.ExponentParameterB =$scope.equation_editor.equation_e;
            comp.ScheduleEstimationParameterC =$scope.equation_editor.equation_t;
            comp.ScheduleEstimationParameterD =$scope.equation_editor.equation_f;
        }
        if(val === 'parameter_function_points'){
            comp.InternalLogicalFiles.Low = $scope.function_points.FILE.low;
            comp.InternalLogicalFiles.Average = $scope.function_points.FILE.average;
            comp.InternalLogicalFiles.High = $scope.function_points.FILE.high;
            comp.ExternalInterfaceFiles.Low = $scope.function_points.INTERFACE.low;
            comp.ExternalInterfaceFiles.Average = $scope.function_points.INTERFACE.average;
            comp.ExternalInterfaceFiles.High = $scope.function_points.INTERFACE.high;
            comp.ExternalInputs.Low = $scope.function_points.INPUT.low;
            comp.ExternalInputs.Average = $scope.function_points.INPUT.average;
            comp.ExternalInputs.High = $scope.function_points.INPUT.high;
            comp.ExternalOutputs.Low = $scope.function_points.OUTPUT.low;
            comp.ExternalOutputs.Average = $scope.function_points.OUTPUT.average;
            comp.ExternalOutputs.High = $scope.function_points.OUTPUT.high;
            comp.ExternalInquiries.Low = $scope.function_points.INQUIRES.low;
            comp.ExternalInquiries.Average = $scope.function_points.INQUIRES.average;
            comp.ExternalInquiries.High = $scope.function_points.INQUIRES.high;
        }


        if(val==='parameter_EAF_product')
        {
            comp.CPLX.HI = $scope.EAF_product.cplx.hi;
            comp.CPLX.LO = $scope.EAF_product.cplx.lo;
            comp.CPLX.NOM = $scope.EAF_product.cplx.nom;
            comp.CPLX.VHI = $scope.EAF_product.cplx.vhi;
            comp.CPLX.VLO = $scope.EAF_product.cplx.vlo;
            comp.CPLX.XHI = $scope.EAF_product.cplx.xhi;

            comp.DATA.HI = $scope.EAF_product.data.hi;
            comp.DATA.LO = $scope.EAF_product.data.lo;
            comp.DATA.NOM = $scope.EAF_product.data.nom;
            comp.DATA.VHI = $scope.EAF_product.data.vhi;
            comp.DATA.VLO = $scope.EAF_product.data.vlo;
            comp.DATA.XHI = $scope.EAF_product.data.xhi;

            comp.DOCU.HI = $scope.EAF_product.docu.hi;
            comp.DOCU.LO = $scope.EAF_product.docu.lo;
            comp.DOCU.NOM = $scope.EAF_product.docu.nom;
            comp.DOCU.VHI = $scope.EAF_product.docu.vhi;
            comp.DOCU.VLO = $scope.EAF_product.docu.vlo;
            comp.DOCU.XHI = $scope.EAF_product.docu.xhi;

            comp.RELY.HI = $scope.EAF_product.rely.hi;
            comp.RELY.LO = $scope.EAF_product.rely.lo;
            comp.RELY.NOM = $scope.EAF_product.rely.nom;
            comp.RELY.VHI = $scope.EAF_product.rely.vhi;
            comp.RELY.VLO = $scope.EAF_product.rely.vlo;
            comp.RELY.XHI = $scope.EAF_product.rely.xhi;

            comp.RUSE.HI = $scope.EAF_product.ruse.hi;
            comp.RUSE.LO = $scope.EAF_product.ruse.lo;
            comp.RUSE.NOM = $scope.EAF_product.ruse.nom;
            comp.RUSE.VHI = $scope.EAF_product.ruse.vhi;
            comp.RUSE.VLO = $scope.EAF_product.ruse.vlo;
            comp.RUSE.XHI = $scope.EAF_product.ruse.xhi;
        }

        if(val==='parameter_EAF_platform')
        {
            comp.PVOL.HI = $scope.EAF_platform.pvol.hi;
            comp.PVOL.LO = $scope.EAF_platform.pvol.lo;
            comp.PVOL.NOM = $scope.EAF_platform.pvol.nom;
            comp.PVOL.VHI = $scope.EAF_platform.pvol.vhi;
            comp.PVOL.VLO = $scope.EAF_platform.pvol.vlo;
            comp.PVOL.XHI = $scope.EAF_platform.pvol.xhi;

            comp.TIME.HI = $scope.EAF_platform.time.hi;
            comp.TIME.LO = $scope.EAF_platform.time.lo;
            comp.TIME.NOM = $scope.EAF_platform.time.nom;
            comp.TIME.VHI = $scope.EAF_platform.time.vhi;
            comp.TIME.VLO = $scope.EAF_platform.time.vlo;
            comp.TIME.XHI = $scope.EAF_platform.time.xhi;

            comp.STOR.HI = $scope.EAF_platform.stor.hi;
            comp.STOR.LO = $scope.EAF_platform.stor.lo;
            comp.STOR.NOM = $scope.EAF_platform.stor.nom;
            comp.STOR.VHI = $scope.EAF_platform.stor.vhi;
            comp.STOR.VLO = $scope.EAF_platform.stor.vlo;
            comp.STOR.XHI = $scope.EAF_platform.stor.xhi;
        }

        if(val==='parameter_EAF_personnel')
        {
            comp.ACAP.HI = $scope.EAF_personnel.acap.hi;
            comp.ACAP.LO = $scope.EAF_personnel.acap.lo;
            comp.ACAP.NOM = $scope.EAF_personnel.acap.nom;
            comp.ACAP.VHI = $scope.EAF_personnel.acap.vhi;
            comp.ACAP.VLO = $scope.EAF_personnel.acap.vlo;
            comp.ACAP.XHI = $scope.EAF_personnel.acap.xhi;

            comp.APEX.HI = $scope.EAF_personnel.apex.hi;
            comp.APEX.LO = $scope.EAF_personnel.apex.lo;
            comp.APEX.NOM = $scope.EAF_personnel.apex.nom;
            comp.APEX.VHI = $scope.EAF_personnel.apex.vhi;
            comp.APEX.VLO = $scope.EAF_personnel.apex.vlo;
            comp.APEX.XHI = $scope.EAF_personnel.apex.xhi;

            comp.PCAP.HI = $scope.EAF_personnel.pcap.hi;
            comp.PCAP.LO = $scope.EAF_personnel.pcap.lo;
            comp.PCAP.NOM = $scope.EAF_personnel.pcap.nom;
            comp.PCAP.VHI = $scope.EAF_personnel.pcap.vhi;
            comp.PCAP.VLO = $scope.EAF_personnel.pcap.vlo;
            comp.PCAP.XHI = $scope.EAF_personnel.pcap.xhi;

            comp.PLEX.HI = $scope.EAF_personnel.plex.hi;
            comp.PLEX.LO = $scope.EAF_personnel.plex.lo;
            comp.PLEX.NOM = $scope.EAF_personnel.plex.nom;
            comp.PLEX.VHI = $scope.EAF_personnel.plex.vhi;
            comp.PLEX.VLO = $scope.EAF_personnel.plex.vlo;
            comp.PLEX.XHI = $scope.EAF_personnel.plex.xhi;

            comp.LTEX.HI = $scope.EAF_personnel.ltex.hi;
            comp.LTEX.LO = $scope.EAF_personnel.ltex.lo;
            comp.LTEX.NOM = $scope.EAF_personnel.ltex.nom;
            comp.LTEX.VHI = $scope.EAF_personnel.ltex.vhi;
            comp.LTEX.VLO = $scope.EAF_personnel.ltex.vlo;
            comp.LTEX.XHI = $scope.EAF_personnel.ltex.xhi;

            comp.PCON.HI = $scope.EAF_personnel.pcon.hi;
            comp.PCON.LO = $scope.EAF_personnel.pcon.lo;
            comp.PCON.NOM = $scope.EAF_personnel.pcon.nom;
            comp.PCON.VHI = $scope.EAF_personnel.pcon.vhi;
            comp.PCON.VLO = $scope.EAF_personnel.pcon.vlo;
            comp.PCON.XHI = $scope.EAF_personnel.pcon.xhi;
        }

        if(val==='parameter_EAF_project')
        {
            comp.SITE.HI = $scope.EAF_project.site.hi;
            comp.SITE.LO = $scope.EAF_project.site.lo;
            comp.SITE.NOM = $scope.EAF_project.site.nom;
            comp.SITE.VHI = $scope.EAF_project.site.vhi;
            comp.SITE.VLO = $scope.EAF_project.site.vlo;
            comp.SITE.XHI = $scope.EAF_project.site.xhi;

            comp.TOOL.HI = $scope.EAF_project.tool.hi;
            comp.TOOL.LO = $scope.EAF_project.tool.lo;
            comp.TOOL.NOM = $scope.EAF_project.tool.nom;
            comp.TOOL.VHI = $scope.EAF_project.tool.vhi;
            comp.TOOL.VLO = $scope.EAF_project.tool.vlo;
            comp.TOOL.XHI = $scope.EAF_project.tool.xhi;

            comp.SCED.HI = $scope.EAF_project.sced.hi;
            comp.SCED.LO = $scope.EAF_project.sced.lo;
            comp.SCED.NOM = $scope.EAF_project.sced.nom;
            comp.SCED.VHI = $scope.EAF_project.sced.vhi;
            comp.SCED.VLO = $scope.EAF_project.sced.vlo;
            comp.SCED.XHI = $scope.EAF_project.sced.xhi;
        }

        if(val==='parameter_EAF_user_defined')
        {
            comp.USR1.HI = $scope.EAF_user_defined.usr1.hi;
            comp.USR1.LO = $scope.EAF_user_defined.usr1.lo;
            comp.USR1.NOM = $scope.EAF_user_defined.usr1.nom;
            comp.USR1.VHI = $scope.EAF_user_defined.usr1.vhi;
            comp.USR1.VLO = $scope.EAF_user_defined.usr1.vlo;
            comp.USR1.XHI = $scope.EAF_user_defined.usr1.xhi;

            comp.USR2.HI = $scope.EAF_user_defined.usr2.hi;
            comp.USR2.LO = $scope.EAF_user_defined.usr2.lo;
            comp.USR2.NOM = $scope.EAF_user_defined.usr2.nom;
            comp.USR2.VHI = $scope.EAF_user_defined.usr2.vhi;
            comp.USR2.VLO = $scope.EAF_user_defined.usr2.vlo;
            comp.USR2.XHI = $scope.EAF_user_defined.usr2.xhi;
        }

        if(val === 'rm')
        {
            comp.EquivalentSLOC = 0;
            comp.AdaptedSLOC = 0;
            comp.DesignModified = 0.0;
            comp.CodeModified = 0.0;
            comp.IntegrationModified = 0.0;
            comp.SoftwareUnderstanding = 30.0;
            comp.AssessmentAndAssimilation = 4.0;
            comp.UnfamiliarityWithSoftware = 0.4;
            comp.AutomaticallyTranslated = 0.0;
            comp.AutomaticTranslationProductivity = 2400.0;
            comp.AdaptationAdjustmentFactor = 0.0;
            

        }


    };

    $scope.showParameters = function(val,component,contrl){
        if(val === 'para_effort'){
            if(contrl === 'open') component.ParametersSettings.EffortAdjustmentFactors.para_EAF_display = 1;
            if(contrl === 'close') component.ParametersSettings.EffortAdjustmentFactors.para_EAF_display = 0;
        }
        if(val === 'para_scale'){
            if(contrl === 'open')
            {
                component.ParametersSettings.ScaleFactors.para_scale_factor_display = 1;
                component.ParametersSettings.ScaleFactors.para_EAF_display = 0;
            }
            if(contrl === 'close') component.ParametersSettings.ScaleFactors.para_scale_factor_display = 0;
        }
        if(val === 'para_equation'){
            if(contrl === 'open')
            {
                component.ParametersSettings.EquationEditor.para_equation_editor_display = 1;
                component.ParametersSettings.EquationEditor.para_EAF_display = 0;
            }
            if(contrl === 'close') component.ParametersSettings.EquationEditor.para_equation_editor_display = 0;
        }
        if(val === 'para_function'){
            if(contrl === 'open')
            {
                component.ParametersSettings.FunctionPoints.para_function_points_display = 1;
                component.ParametersSettings.FunctionPoints.para_EAF_display = 0;
            }
            if(contrl === 'close') component.ParametersSettings.FunctionPoints.para_function_points_display = 0;
        }
        if(val === 'para_person'){
            if(contrl === 'open')
            {
                component.ParametersSettings.PersonMonth.para_person_month_display = 1;
                component.ParametersSettings.PersonMonth.para_EAF_display = 0;
            }
            if(contrl === 'close') component.ParametersSettings.PersonMonth.para_person_month_display = 0;
        }
    };


    $scope.showEAFParameters = function(var1, component)
    {
        if(var1 === 'product')
        {
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_product_display = 1;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_platform_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_personnel_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_project_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_user_defined_display = 0;

        }

        if(var1 === 'platform')
        {
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_product_display = 0;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_platform_display = 1;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_personnel_display = 0;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_project_display = 0;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_user_defined_display = 0;

        }

        if(var1 === 'personnel')
        {
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_product_display = 0;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_platform_display = 0;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_personnel_display = 1;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_project_display = 0;
             component.ParametersSettings.EffortAdjustmentFactors.para_EAF_user_defined_display = 0;

        }

        if(var1 === 'project')
        {
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_product_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_platform_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_personnel_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_project_display = 1;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_user_defined_display = 0;

        }

        if(var1 === 'user_defined')
        {
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_product_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_platform_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_personnel_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_project_display = 0;
            component.ParametersSettings.EffortAdjustmentFactors.para_EAF_user_defined_display = 1;

        }
    };



}