/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.usc.csse.coincomo.web;

import edu.usc.csse.coincomo.COINCOMOAdaptationAndReuse;
import edu.usc.csse.coincomo.COINCOMOComponent;
import edu.usc.csse.coincomo.COINCOMOComponentParameters;
import edu.usc.csse.coincomo.COINCOMOConstants;
import edu.usc.csse.coincomo.COINCOMOSubComponent;
import edu.usc.csse.coincomo.COINCOMOSubSystem;
import edu.usc.csse.coincomo.COINCOMOSystem;
import edu.usc.csse.coincomo.COINCOMOAdaptationAndReuseManager;
import edu.usc.csse.coincomo.COINCOMOComponentManager;
import edu.usc.csse.coincomo.COINCOMOSubComponentManager;
import edu.usc.csse.coincomo.COINCOMOSubSystemManager;
import edu.usc.csse.coincomo.COINCOMOSystemManager;
import java.util.Iterator;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Path;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

/**
 * REST Web Service
 *
 * @author Larry
 */
@Path("api")
public class CoincomoApi {

    @Context
    private UriInfo context;
    private int SysDisplay;
    private int SysOverview;
    
    private int[] SubSysbtnDisplay;
    private int[] SubSysoverview;
    
    
    private double[] para_EAF_display;
    private double[] para_EAF_product_display;
    private double[] para_EAF_platform_display;
    private double[] para_EAF_personnel_display;
    private double[] para_EAF_project_display;
    private double[] para_EAF_user_defined_display;
    
    private double[] para_scale_factor_display;
    private double[] para_equation_editor_display;
    private double[] para_function_points_display;
    private double[] para_person_month_display;

    private int[] Comoverview;
    private int[] ComscheDisplay;
    private int[] ComscaleDisplay;
    private int[] Comcopsemo_display;
    private int[] Comparameters_display;
        
        
    private int[] SubComnameDisplay;
    private int[] SubComsizeDisplay;
    private int[] SubComlaborRateDisplay;
    private int[] SubComEAFDisplay;
    private int[] SubComnewDisplay;
    private int[] SubComfunctionPointDisplay;
    private int[] SubComadaptationReuseDisplay;
    private int[] SubComx;

    private int[] ReusemodelnameDisplay;
    private int[] ReusemodelparameterDisplay;
    private int[] Reusemodelx;
    /**
     * Creates a new instance of CoincomoApi
     */
    public CoincomoApi() {
    }

    /**
     * Retrieves representation of an instance of
     * edu.usc.csse.coincomo.web.CoincomoApi
     *
     * @return an instance of java.lang.String
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON + "; charset=utf-8")
    @Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
    public String getJson(JSONObject inputJsonObj) throws JSONException {
        //
//        // pseudo code
//        String jsonString = (String) inputJsonObj.get("input"); 
        //JSONObject json = (JSONObject) JSONSerializer.toJSON( jsonTxt );
        //return inputJsonObj.toString();

//        COINCOMOSystem system = deserial(jsonString);
//COINCOMOSystem system = getSampleSystem();
        //return system.toString();
        COINCOMOSystem system = getSystem(inputJsonObj);
//        
        // COINCOMOSystemManager.updateSystem(system);
//      
        return ParseSystem(system);
//        COINCOMOSystem system = COINCOMOSystemManager.insertSystem();
//        COINCOMOSubSystem subSystem = COINCOMOSubSystemManager.insertSubSystem(system);
//        subSystem.setName(null);
//            COINCOMOSubSystem
//                COINCOMOComponent
//                    COINCOMOSubComponent
//                        COINCOMOAdaptationAndReuse
////        
////        
////        UI send JSON STRING -> API
//          API deserialize JSON STRING as JSON OBJECT
//              convert JSON OBJECT into COINCOMO OJBECTS
//              update COINCOMO OBJECTS
//              convert COINCOMO OBJECTS into JSON OBJECTS
//              serialize JSON OBJECTS
//              output JSON OBJECTS
//                      
//        
        /**
         * COINCOMO Engine Part
         */
        //COINCOMOSystem system = getSampleSystem();
        /**
         * JSON-P Part
         */
    }

    @SuppressWarnings({"empty-statement", "empty-statement"})
    private String ParseSystem(COINCOMOSystem system) {
        JsonObjectBuilder jsonBuilder = Json.createObjectBuilder();
        JsonObjectBuilder responseBuilder = Json.createObjectBuilder();
        JsonObjectBuilder dataBuilder = Json.createObjectBuilder();

        JsonArrayBuilder systemsBuilder = Json.createArrayBuilder();

        JsonObjectBuilder systemBuilder = Json.createObjectBuilder();

        systemBuilder.add("ID", system.getUnitID());
        systemBuilder.add("DatabaseID", system.getDatabaseID());
        systemBuilder.add("Name", system.getName());
        systemBuilder.add("SLOC", system.getSLOC());
        systemBuilder.add("Cost", system.getCost());
        systemBuilder.add("Staff", system.getStaff());
        systemBuilder.add("Effort", system.getEffort());
        systemBuilder.add("Schedule", system.getSchedule());
        systemBuilder.add("display", SysDisplay);
        systemBuilder.add("overview", SysOverview);


        JsonArrayBuilder subSystemsBuilder = Json.createArrayBuilder();
        Iterator subSystemsIter = system.getListOfSubUnits().iterator();
        int i = 0 ;
        while (subSystemsIter.hasNext()) {
            COINCOMOSubSystem subSystem = (COINCOMOSubSystem) subSystemsIter.next();
            
            JsonObjectBuilder subSystemBuilder = Json.createObjectBuilder();
            subSystemBuilder.add("ID", subSystem.getUnitID());
            subSystemBuilder.add("DatabaseID", subSystem.getDatabaseID());
            subSystemBuilder.add("Name", subSystem.getName());
            subSystemBuilder.add("SLOC", subSystem.getSLOC());
            subSystemBuilder.add("Cost", subSystem.getCost());
            subSystemBuilder.add("Staff", subSystem.getStaff());
            subSystemBuilder.add("Effort", subSystem.getEffort());
            subSystemBuilder.add("Schedule", subSystem.getSchedule());
            subSystemBuilder.add("ZoomLevel", subSystem.getZoomLevel());
            subSystemBuilder.add("btnDisplay", SubSysbtnDisplay[i]);
            subSystemBuilder.add("overview", SubSysoverview[i]);

            i=i+1;
            JsonArrayBuilder componentsBuilder = Json.createArrayBuilder();
            Iterator componentsIter = subSystem.getListOfSubUnits().iterator();
            int j = 0;
            while (componentsIter.hasNext()) {
                COINCOMOComponent component = (COINCOMOComponent) componentsIter.next();

                JsonObjectBuilder componentBuilder = Json.createObjectBuilder();

                componentBuilder.add("ID", component.getUnitID());
                componentBuilder.add("DatabaseID", component.getDatabaseID());
                componentBuilder.add("Name", component.getName());
                componentBuilder.add("SLOC", component.getSLOC());
                componentBuilder.add("Cost", component.getCost());
                componentBuilder.add("Staff", component.getStaff());
                componentBuilder.add("Effort", component.getEffort());
                componentBuilder.add("Schedule", component.getSchedule());
                componentBuilder.add("Productivity", COINCOMOComponentManager.calculateProductivity(component));
                componentBuilder.add("InstructionCost", COINCOMOComponentManager.calculateInstructionCost(component));
                componentBuilder.add("Risk", COINCOMOComponentManager.calculateRisk(component));

                
               
                COINCOMOComponentParameters parameters = component.getParameters();
                JsonObjectBuilder ComponentParametersSettings = Json.createObjectBuilder();

                double[][] EAF_WEIGHTS = parameters.getEAFWeights();
                JsonObjectBuilder EffortAdjustmentFactorsBuilder = Json.createObjectBuilder();
                for (int outer = 0; outer < EAF_WEIGHTS.length; outer++) {
                    JsonObjectBuilder EAFBuilder = Json.createObjectBuilder();
                    for (int inner = 0; inner < COINCOMOConstants.Ratings.length; inner++) {
                        EAFBuilder.add(COINCOMOConstants.Ratings[inner].toString(), EAF_WEIGHTS[outer][inner]);
                    }
                    EffortAdjustmentFactorsBuilder.add(COINCOMOConstants.EAFS[outer].toString(), EAFBuilder.build());
                }
                EffortAdjustmentFactorsBuilder.add("para_EAF_display",para_EAF_display[j]);
                EffortAdjustmentFactorsBuilder.add("para_EAF_product_display",para_EAF_product_display[j]);
                EffortAdjustmentFactorsBuilder.add("para_EAF_platform_display",para_EAF_platform_display[j]);
                EffortAdjustmentFactorsBuilder.add("para_EAF_personnel_display",para_EAF_personnel_display[j]);
                EffortAdjustmentFactorsBuilder.add("para_EAF_project_display",para_EAF_project_display[j]);
                EffortAdjustmentFactorsBuilder.add("para_EAF_user_defined_display",para_EAF_user_defined_display[j]);
    
                ComponentParametersSettings.add("EffortAdjustmentFactors", EffortAdjustmentFactorsBuilder);


                double[][] SF_WEIGHTS = parameters.getSFWeights();
                JsonObjectBuilder ScaleFactorsBuilder = Json.createObjectBuilder();
                for (int outer = 0; outer < SF_WEIGHTS.length; outer++) {
                    JsonObjectBuilder SFBuilder = Json.createObjectBuilder();
                    for (int inner = 0; inner < COINCOMOConstants.Ratings.length; inner++) {
                        SFBuilder.add(COINCOMOConstants.Ratings[inner].toString(), SF_WEIGHTS[outer][inner]);
                    }
                    ScaleFactorsBuilder.add(COINCOMOConstants.SFS[outer].toString(), SFBuilder.build());
                }
                ScaleFactorsBuilder.add("para_scale_factor_display",para_scale_factor_display[j]);
                
                ComponentParametersSettings.add("ScaleFactors", ScaleFactorsBuilder);


                componentBuilder.add("ParametersSettings", ComponentParametersSettings.build());

                JsonObjectBuilder ParametersEquationEditor = Json.createObjectBuilder();
                ParametersEquationEditor.add("EffortEstimationParameterA", parameters.getA());
                ParametersEquationEditor.add("ExponentParameterB", parameters.getB());
                ParametersEquationEditor.add("ScheduleEstimationParameterC", parameters.getC());
                ParametersEquationEditor.add("ScheduleEstimationParameterD", parameters.getD());
                ParametersEquationEditor.add("para_equation_editor_display",para_equation_editor_display[j]);
                ComponentParametersSettings.add("EquationEditor", ParametersEquationEditor.build());

                int[][] FP_WEIGHTS = parameters.getFPWeights();
                JsonObjectBuilder FunctionPointsBuilder = Json.createObjectBuilder();
                for (int outer = 0; outer < FP_WEIGHTS.length; outer++) {
                    JsonObjectBuilder FPBuilder = Json.createObjectBuilder();
                    for (int inner = 0; inner < COINCOMOConstants.FTS.length - 1; inner++) {
                        FPBuilder.add(COINCOMOConstants.FTS[inner].toString(), FP_WEIGHTS[outer][inner]);
                    }
                    FunctionPointsBuilder.add(COINCOMOConstants.FPS2[outer].toString(), FPBuilder.build());
                }
                FunctionPointsBuilder.add("para_function_points_display",para_function_points_display[j]);
                ComponentParametersSettings.add("FunctionPoints", FunctionPointsBuilder);


                JsonObjectBuilder ParametersPersonMonth = Json.createObjectBuilder();
                ParametersPersonMonth.add("HoursPerPM", parameters.getWorkHours());
                ParametersPersonMonth.add("para_person_month_display",para_person_month_display[j]);
                ComponentParametersSettings.add("PersonMonth", ParametersPersonMonth.build());

                componentBuilder.add("ParametersSettings", ComponentParametersSettings.build());

                componentBuilder.add("ScaleFactor", component.getSF());
                JsonObjectBuilder SFBuilder = Json.createObjectBuilder();
                COINCOMOConstants.Rating[] rating = component.getSFRatings();
                COINCOMOConstants.Increment[] increment = component.getSFIncrements();

                for (int outer = 0; outer < rating.length; outer++) {
                    JsonObjectBuilder SFSetBuilder = Json.createObjectBuilder();
                    SFSetBuilder.add("Rating", rating[outer].toString());
                    SFSetBuilder.add("Increment", increment[outer].toString());
                    SFBuilder.add(COINCOMOConstants.SFS[outer].toString(), SFSetBuilder.build());
                }
                componentBuilder.add("ScaleFactorsSettings", SFBuilder.build());


                //schedule            
                componentBuilder.add("ScheduleFactor", component.getSCED());
                componentBuilder.add("SchedulePercentFactor", component.getSCEDPercent());

                JsonObjectBuilder ScheduleSettingsBuilder = Json.createObjectBuilder();
                JsonObjectBuilder SCEDBuilder = Json.createObjectBuilder();
                SCEDBuilder.add("Rating", component.getSCEDRating().toString());
                SCEDBuilder.add("Increment", component.getSCEDIncrement().toString());
                ScheduleSettingsBuilder.add("SCED", SCEDBuilder.build());
                componentBuilder.add("ScheduleSettingsBuilder", ScheduleSettingsBuilder.build());

                JsonObjectBuilder COPSEMOBuilder = Json.createObjectBuilder();

                JsonObjectBuilder InceptionBuilder = Json.createObjectBuilder();
                InceptionBuilder.add("EffortPercentage", component.getInceptionEffortPercentage());
                InceptionBuilder.add("SchedulePercentage", component.getInceptionSchedulePercentage());
                InceptionBuilder.add("Effort", component.getInceptionEffort());
                InceptionBuilder.add("Month", component.getInceptionMonth());
                InceptionBuilder.add("Personnel", component.getInceptionPersonnel());
                COPSEMOBuilder.add("Inception", InceptionBuilder.build());

                JsonObjectBuilder ElaborationBuilder = Json.createObjectBuilder();
                ElaborationBuilder.add("EffortPercentage", component.getElaborationEffortPercentage());
                ElaborationBuilder.add("SchedulePercentage", component.getElaborationSchedulePercentage());
                ElaborationBuilder.add("Effort", component.getElaborationEffort());
                ElaborationBuilder.add("Month", component.getElaborationMonth());
                ElaborationBuilder.add("Personnel", component.getElaborationPersonnel());
                COPSEMOBuilder.add("Elaboration", ElaborationBuilder.build());

                JsonObjectBuilder ConstructionBuilder = Json.createObjectBuilder();
                ConstructionBuilder.add("EffortPercentage", component.getConstructionEffortPercentage());
                ConstructionBuilder.add("SchedulePercentage", component.getConstructionSchedulePercentage());
                ConstructionBuilder.add("Effort", component.getConstructionEffort());
                ConstructionBuilder.add("Month", component.getConstructionMonth());
                ConstructionBuilder.add("Personnel", component.getConstructionPersonnel());
                COPSEMOBuilder.add("Construction", ConstructionBuilder.build());

                JsonObjectBuilder TransitionBuilder = Json.createObjectBuilder();
                TransitionBuilder.add("EffortPercentage", component.getTransitionEffortPercentage());
                TransitionBuilder.add("SchedulePercentage", component.getTransitionSchedulePercentage());
                TransitionBuilder.add("Effort", component.getTransitionEffort());
                TransitionBuilder.add("Month", component.getTransitionMonth());
                TransitionBuilder.add("Personnel", component.getTransitionPersonnel());
                COPSEMOBuilder.add("Transition", TransitionBuilder.build());
                componentBuilder.add("COPSEMO", COPSEMOBuilder.build());
                componentBuilder.add("MultiBuildShift", component.getMultiBuildShift());

                componentBuilder.add("Comoverview",Comoverview[j]);
                componentBuilder.add("ComscheDisplay",ComscheDisplay[j]);
                componentBuilder.add("ComscaleDisplay",ComscaleDisplay[j]);
                
                componentBuilder.add("Comcopsemo_display",Comcopsemo_display[j]);
                componentBuilder.add("Comparameters_display",Comparameters_display[j]);
                
                j=j+1;
                JsonArrayBuilder subComponentsBuilder = Json.createArrayBuilder();
                Iterator subComponentsIter = component.getListOfSubUnits().iterator();
                int k =0;
                while (subComponentsIter.hasNext()) {
                    COINCOMOSubComponent subComponent = (COINCOMOSubComponent) subComponentsIter.next();

                    JsonObjectBuilder subComponentBuilder = Json.createObjectBuilder();
                    subComponentBuilder.add("ID", subComponent.getUnitID());
                    subComponentBuilder.add("DatabaseID", subComponent.getDatabaseID());
                    subComponentBuilder.add("Name", subComponent.getName());
                    subComponentBuilder.add("SLOC", subComponent.getSLOC());
                    subComponentBuilder.add("Cost", subComponent.getCost());
                    subComponentBuilder.add("Staff", subComponent.getStaff());
                    subComponentBuilder.add("Effort", subComponent.getEffort());
                    subComponentBuilder.add("Schedule", subComponent.getSchedule());
                    subComponentBuilder.add("Productivity", subComponent.getProductivity());
                    subComponentBuilder.add("InstructionCost", subComponent.getInstructionCost());
                    subComponentBuilder.add("Risk", subComponent.getRisk());
                    subComponentBuilder.add("NominalEffort", subComponent.getNominalEffort());
                    subComponentBuilder.add("EstimatedEffort", subComponent.getEstimatedEffort());
                    subComponentBuilder.add("SLOCWithoutREVL", subComponent.getSumOfSLOCs());
                    subComponentBuilder.add("LaborRate", subComponent.getLaborRate());
                    subComponentBuilder.add("Language", subComponent.getLanguage());
                    subComponentBuilder.add("EAF", subComponent.getEAF());
                    
                    subComponentBuilder.add("nameDisplay", SubComnameDisplay[k]);
                    subComponentBuilder.add("sizeDisplay", SubComsizeDisplay[k]);
                    subComponentBuilder.add("laborRateDisplay", SubComlaborRateDisplay[k]);
                    subComponentBuilder.add("EAFDisplay", SubComEAFDisplay[k]);
                    
                    subComponentBuilder.add("nameDisplay", SubComnewDisplay[k]);
                    subComponentBuilder.add("functionPointDisplay", SubComfunctionPointDisplay[k]);
                    subComponentBuilder.add("adaptationReuseDisplay", SubComadaptationReuseDisplay[k]);
                    subComponentBuilder.add("x", SubComx[k]);
 
                    
                    k=k+1;
                    JsonObjectBuilder EAFuilder = Json.createObjectBuilder();
                    COINCOMOConstants.Rating[] subrating = subComponent.getEAFRatings();
                    COINCOMOConstants.Increment[] subincrement = subComponent.getEAFIncrements();

                    for (int outer = 0; outer < COINCOMOConstants.EAFS.length - 1; outer++) {
                        JsonObjectBuilder EAFSetBuilder = Json.createObjectBuilder();
                        EAFSetBuilder.add("Rating", subrating[outer].toString());
                        EAFSetBuilder.add("Increment", subincrement[outer].toString());
                        EAFuilder.add(COINCOMOConstants.EAFS[outer].toString(), EAFSetBuilder.build());
                    }
                    subComponentBuilder.add("EAFSettings", EAFuilder.build());

                    subComponentBuilder.add("Breakage", subComponent.getREVL());

                    JsonObjectBuilder NewBuilder = Json.createObjectBuilder();
                    NewBuilder.add("NewSLOC", subComponent.getNewSLOC());
                    subComponentBuilder.add("New", NewBuilder.build());

                    JsonObjectBuilder functionPointsBuilder = Json.createObjectBuilder();
                    functionPointsBuilder.add("Multiplier", subComponent.getMultiplier());
                    functionPointsBuilder.add("RatioType", subComponent.getRatioType().toString());
                    functionPointsBuilder.add("CalculationMethod", subComponent.getCalculationMethod().toString());

                    JsonObjectBuilder FunctionTypesBuilder = Json.createObjectBuilder();

                    int[][] FT_WEIGHTS = new int[5][];
                    FT_WEIGHTS[0] = subComponent.getInternalLogicalFiles();
                    FT_WEIGHTS[1] = subComponent.getExternalInterfaceFiles();
                    FT_WEIGHTS[2] = subComponent.getExternalInputs();
                    FT_WEIGHTS[3] = subComponent.getExternalOutputs();
                    FT_WEIGHTS[4] = subComponent.getExternalInquiries();

                    for (int outer = 0; outer < 5; outer++) {
                        JsonObjectBuilder FTBuilder = Json.createObjectBuilder();
                        for (int inner = 0; inner < COINCOMOConstants.FTS.length; inner++) {
                            FTBuilder.add(COINCOMOConstants.FTS[inner].toString(), FT_WEIGHTS[outer][inner]);
                        }
                        FunctionTypesBuilder.add(COINCOMOConstants.FPS2[outer].toString(), FTBuilder.build());
                    }

                    functionPointsBuilder.add("FunctionTypes", FunctionTypesBuilder.build());

                    functionPointsBuilder.add("TotalUnadjustedFunctionPoints", subComponent.getTotalUnadjustedFunctionPoints());
                    functionPointsBuilder.add("EquivalentSLOC", subComponent.getEquivalentSLOC());
                    subComponentBuilder.add("FunctionPoints", functionPointsBuilder.build());


                    JsonArrayBuilder adaptationAndReusesBuilder = Json.createArrayBuilder();
                    Iterator adaptationAndReusesIter = subComponent.getListOfSubUnits().iterator();
                    while (adaptationAndReusesIter.hasNext()) {
                        COINCOMOAdaptationAndReuse adaptationAndReuse = (COINCOMOAdaptationAndReuse) adaptationAndReusesIter.next();

                        JsonObjectBuilder adaptationAndReuseBuilder = Json.createObjectBuilder();

                        adaptationAndReuseBuilder.add("ID", adaptationAndReuse.getUnitID());
                        adaptationAndReuseBuilder.add("DatabaseID", adaptationAndReuse.getDatabaseID());
                        adaptationAndReuseBuilder.add("Name", adaptationAndReuse.getName());
                        adaptationAndReuseBuilder.add("AdaptedSLOC", adaptationAndReuse.getAdaptedSLOC());
                        adaptationAndReuseBuilder.add("DesignModified", adaptationAndReuse.getDesignModified());
                        adaptationAndReuseBuilder.add("CodeModified", adaptationAndReuse.getCodeModified());
                        adaptationAndReuseBuilder.add("IntegrationModified", adaptationAndReuse.getIntegrationModified());
                        adaptationAndReuseBuilder.add("SoftwareUnderstanding", adaptationAndReuse.getSoftwareUnderstanding());
                        adaptationAndReuseBuilder.add("AssessmentAndAssimilation", adaptationAndReuse.getAssessmentAndAssimilation());
                        adaptationAndReuseBuilder.add("UnfamiliarityWithSoftware", adaptationAndReuse.getUnfamiliarityWithSoftware());
                        adaptationAndReuseBuilder.add("AutomaticallyTranslated", adaptationAndReuse.getAutomaticallyTranslated());
                        adaptationAndReuseBuilder.add("AutomaticTranslationProductivity", adaptationAndReuse.getAutomaticTranslationProductivity());
                        adaptationAndReuseBuilder.add("AdaptationAdjustmentFactor", adaptationAndReuse.getAdaptationAdjustmentFactor());
                        adaptationAndReuseBuilder.add("EquivalentSLOC", adaptationAndReuse.getEquivalentSLOC());
                        adaptationAndReusesBuilder.add(adaptationAndReuseBuilder.build());
                    }
                    subComponentBuilder.add("AdaptationAndReuse", adaptationAndReusesBuilder.build());

                    subComponentsBuilder.add(subComponentBuilder.build());
                }
                componentBuilder.add("SubComponents", subComponentsBuilder.build());

                componentsBuilder.add(componentBuilder.build());
            }
            subSystemBuilder.add("Components", componentsBuilder.build());

            subSystemsBuilder.add(subSystemBuilder.build());
        }

        systemBuilder.add("SubSystems", subSystemsBuilder.build());
        systemsBuilder.add(systemBuilder.build());
        dataBuilder.add("System", systemsBuilder.build());

        responseBuilder.add("success", true);

        jsonBuilder.add("response", responseBuilder.build());
        jsonBuilder.add("data", dataBuilder.build());

        return jsonBuilder.build().toString();
    }

    private COINCOMOSystem getSystem(JSONObject inputJsonObj) throws JSONException {
        COINCOMOSystem System = COINCOMOSystemManager.insertSystem();
        JSONObject system = inputJsonObj.getJSONObject("System");

        //set ID
//        int sysID= system.getInt("ID");
//        System.setNextID(sysID);

        int sysDatabaseID = system.getInt("DatabaseID");
        System.setDatabaseID(sysDatabaseID);

        String sysName = system.getString("Name");
        System.setName(sysName);

        int sysSLOC = system.getInt("SLOC");
        System.setSLOC(sysSLOC);

        double sysCost = system.getDouble("Cost");
        System.setCost(sysCost);

        double sysStaff = system.getDouble("Staff");
        System.setStaff(sysStaff);

        double sysEffort = system.getDouble("Effort");
        System.setEffort(sysEffort);

        double sysSchedule = system.getDouble("Schedule");
        System.setSchedule(sysSchedule);
        
        SysDisplay = system.getInt("display");
        
        SysOverview = system.getInt("overview");

        JSONArray subsystems = system.getJSONArray("SubSystems");
        
        SubSysbtnDisplay = new int[subsystems.length()];
        SubSysoverview = new int[subsystems.length()];
        
        for (int i = 0; i < subsystems.length(); i++) {
            COINCOMOSubSystem SubSystem = COINCOMOSubSystemManager.insertSubSystem(System);
            JSONObject subsystem = subsystems.getJSONObject(i);

            //set ID
//            int subsysID= subsystem.getInt("ID");
//            SubSystem.setNextID(subsysID);
            int subsysDatabaseID = subsystem.getInt("DatabaseID");
            SubSystem.setDatabaseID(subsysDatabaseID);

            String subsystemName = subsystem.getString("Name");
            SubSystem.setName(subsystemName);

            int subsysSLOC = subsystem.getInt("SLOC");
            SubSystem.setSLOC(subsysSLOC);

            double subsysCost = subsystem.getDouble("Cost");
            SubSystem.setCost(subsysCost);

            double subsysStaff = subsystem.getDouble("Staff");
            SubSystem.setStaff(subsysStaff);

            double subsysEffort = subsystem.getDouble("Effort");
            SubSystem.setEffort(subsysEffort);

            double subsysSchedule = subsystem.getDouble("Schedule");
            SubSystem.setSchedule(subsysSchedule);

            int subsysZoomLevel = subsystem.getInt("ZoomLevel");
            SubSystem.setZoomLevel(subsysZoomLevel);
            
            SubSysbtnDisplay[i]=subsystem.getInt("btnDisplay");
            SubSysoverview[i]=subsystem.getInt("overview");


            JSONArray components = subsystem.getJSONArray("Components");
            
            para_EAF_display= new double[components.length()];
    para_EAF_product_display= new double[components.length()];
    para_EAF_platform_display= new double[components.length()];
    para_EAF_personnel_display= new double[components.length()];
    para_EAF_project_display= new double[components.length()];
    para_EAF_user_defined_display= new double[components.length()];
    
    para_scale_factor_display= new double[components.length()];
    para_equation_editor_display= new double[components.length()];
    para_function_points_display= new double[components.length()];
    para_person_month_display= new double[components.length()];

    Comoverview= new int[components.length()];
    ComscheDisplay= new int[components.length()];
    ComscaleDisplay= new int[components.length()];
    Comcopsemo_display= new int[components.length()];
    Comparameters_display= new int[components.length()];
            
            
            for (int j = 0; j < components.length(); j++) {
                COINCOMOComponent Component = COINCOMOComponentManager.insertComponent(SubSystem);
                JSONObject component = components.getJSONObject(j);

                //set ID
//                int componentID= component.getInt("ID");
//                Component.setNextID(componentID);

                int componentDatabaseID = component.getInt("DatabaseID");
                Component.setDatabaseID(componentDatabaseID);

                String componentName = component.getString("Name");
                Component.setName(componentName);

                int componentSLOC = component.getInt("SLOC");
                Component.setSLOC(componentSLOC);

                double componentCost = component.getDouble("Cost");
                Component.setCost(componentCost);

                double componentStaff = component.getDouble("Staff");
                Component.setStaff(componentStaff);

                double componentEffort = component.getDouble("Effort");
                Component.setEffort(componentEffort);

                double componentSchedule = component.getDouble("Schedule");
                Component.setSchedule(componentSchedule);
                
                Comoverview[j]=component.getInt("overview");
                ComscheDisplay[j]=component.getInt("scheDisplay");
    ComscaleDisplay[j]=component.getInt("scaleDisplay");
    Comcopsemo_display[j]=component.getInt("copsemo_display");
    Comparameters_display[j]=component.getInt("parameters_display");

//                /// the following three don't need
//                int componentProductivity= component.getInt("Productivity");
//                Component.SET(componentProductivity);   
//
//                double componentInstructionCost= component.getDouble("InstructionCost");
//                Component.setInstructionCost(componentInstructionCost);
//                
//                 double componentRisk= component.getDouble("Risk");
//                 Component.setRisk(componentRisk);

                //              Parameters  
                JSONObject parameterssettings = component.getJSONObject("ParametersSettings");

                double[][] EAF_WEIGHTS = new double[19][6];
                JSONObject effortAdjustmentFactors = parameterssettings.getJSONObject("EffortAdjustmentFactors");

                for (int outer = 0; outer < EAF_WEIGHTS.length; outer++) {
                    JSONObject eaf = effortAdjustmentFactors.getJSONObject(COINCOMOConstants.EAFS[outer]);
                    for (int inner = 0; inner < COINCOMOConstants.Ratings.length; inner++) {
                        EAF_WEIGHTS[outer][inner] = eaf.getDouble(COINCOMOConstants.Ratings[inner]);
                    }
                }

               para_EAF_display[j]=effortAdjustmentFactors.getDouble("para_EAF_display");
               para_EAF_product_display[j]=effortAdjustmentFactors.getDouble("para_EAF_product_display");
               para_EAF_platform_display[j]=effortAdjustmentFactors.getDouble("para_EAF_platform_display");
               para_EAF_personnel_display[j]=effortAdjustmentFactors.getDouble("para_EAF_personnel_display");
               para_EAF_project_display[j]=effortAdjustmentFactors.getDouble("para_EAF_project_display");
               para_EAF_user_defined_display[j]=effortAdjustmentFactors.getDouble("para_EAF_user_defined_display");
                       
                       
                double[][] SF_WEIGHTS = new double[5][6];
                JSONObject scaleFactors = parameterssettings.getJSONObject("ScaleFactors");

                for (int outer = 0; outer < SF_WEIGHTS.length; outer++) {
                    JSONObject sf = scaleFactors.getJSONObject(COINCOMOConstants.SFS[outer]);
                    for (int inner = 0; inner < COINCOMOConstants.Ratings.length; inner++) {
                        SF_WEIGHTS[outer][inner] = sf.getDouble(COINCOMOConstants.Ratings[inner]);
                    }
                }
                para_scale_factor_display[j]=scaleFactors.getDouble("para_scale_factor_display");
                
                
                JSONObject equationeditor = parameterssettings.getJSONObject("EquationEditor");
                double a = equationeditor.getDouble("EffortEstimationParameterA");
                double b = equationeditor.getDouble("ExponentParameterB");
                double c = equationeditor.getDouble("ScheduleEstimationParameterC");
                double d = equationeditor.getDouble("ScheduleEstimationParameterD");
                para_equation_editor_display[j]=equationeditor.getDouble("para_equation_editor_display");

                int[][] FP_WEIGHTS = new int[5][3];
                JSONObject functionPoints = parameterssettings.getJSONObject("FunctionPoints");

                for (int outer = 0; outer < FP_WEIGHTS.length; outer++) {
                    JSONObject fp = functionPoints.getJSONObject(COINCOMOConstants.FPS2[outer]);
                    for (int inner = 0; inner < COINCOMOConstants.FTS.length - 1; inner++) {
                        FP_WEIGHTS[outer][inner] = fp.getInt(COINCOMOConstants.FTS[inner]);
                    }
                }
                para_function_points_display[j]=functionPoints.getDouble("para_function_points_display");
                
                JSONObject personMonth = parameterssettings.getJSONObject("PersonMonth");
                double hoursperPM = personMonth.getDouble("HoursPerPM");
                para_person_month_display[j]=personMonth.getDouble("para_person_month_display");

                //something wrong need further check
                COINCOMOComponentParameters parameter = Component.getParameters();
                parameter.setA(a);
                parameter.setB(b);
                parameter.setC(c);
                parameter.setD(d);
                parameter.setEAFWeights(EAF_WEIGHTS);
                parameter.setSFWeights(SF_WEIGHTS);
                parameter.setFPWeights(FP_WEIGHTS);
                parameter.setWorkHours(hoursperPM);

                double componentScaleFactor = component.getDouble("ScaleFactor");
                Component.setSF(componentScaleFactor);

                JSONObject sf = component.getJSONObject("ScaleFactorsSettings");
                COINCOMOConstants.Rating[] rating = new COINCOMOConstants.Rating[5];
                COINCOMOConstants.Increment[] increment = new COINCOMOConstants.Increment[5];

                for (int outer = 0; outer < SF_WEIGHTS.length; outer++) {
                    JSONObject sfset = sf.getJSONObject(COINCOMOConstants.SFS[outer]);
                    rating[outer] = COINCOMOConstants.Rating.valueOf(sfset.getString("Rating"));

                    String Tincrement = sfset.getString("Increment");
                    if (Tincrement.equals("0%")) {
                        increment[outer] = COINCOMOConstants.Increment.Percent0;
                    }
                    if (Tincrement.equals("25%")) {
                        increment[outer] = COINCOMOConstants.Increment.Percent25;
                    }
                    if (Tincrement.equals("50%")) {
                        increment[outer] = COINCOMOConstants.Increment.Percent50;
                    }
                    if (Tincrement.equals("75%")) {
                        increment[outer] = COINCOMOConstants.Increment.Percent75;
                    }

                }

                Component.setSFRatings(rating);
                Component.setSFIncrements(increment);


                double componentScheduleFactor = component.getDouble("ScheduleFactor");
                Component.setSCED(componentScheduleFactor);
                double componentSchedulePercentFactor = component.getDouble("SchedulePercentFactor");
                Component.setSCEDPercent(componentSchedulePercentFactor);

                //schedule
                JSONObject schedule = component.getJSONObject("ScheduleSettings");
                JSONObject sced = schedule.getJSONObject("SCED");
                COINCOMOConstants.Rating scedrating;
                scedrating = COINCOMOConstants.Rating.valueOf(sced.getString("Rating"));

                COINCOMOConstants.Increment scedincrement = null;
                if (sced.getString("Increment").equals("0%")) {
                    scedincrement = COINCOMOConstants.Increment.Percent0;
                }
                if (sced.getString("Increment").equals("25%")) {
                    scedincrement = COINCOMOConstants.Increment.Percent25;
                }
                if (sced.getString("Increment").equals("50%")) {
                    scedincrement = COINCOMOConstants.Increment.Percent50;
                }
                if (sced.getString("Increment").equals("75%")) {
                    scedincrement = COINCOMOConstants.Increment.Percent75;
                }

                Component.setSCEDRating(scedrating);
                Component.setSCEDIncrement(scedincrement);
//                
                JSONObject copsemo = component.getJSONObject("COPSEMO");

                JSONObject inception = copsemo.getJSONObject("Inception");
                double inceptionEffort = inception.getDouble("Effort");
                Component.setInceptionEffort(inceptionEffort);

                double inceptionEffortPercentage = inception.getDouble("EffortPercentage");
                Component.setInceptionEffortPercentage(inceptionEffortPercentage);

                double inceptionSchedulePercentage = inception.getDouble("SchedulePercentage");
                Component.setInceptionSchedulePercentage(inceptionSchedulePercentage);

                double inceptionMonth = inception.getDouble("Month");
                Component.setInceptionMonth(inceptionMonth);

                double inceptionPersonnel = inception.getDouble("Personnel");
                Component.setInceptionPersonnel(inceptionPersonnel);


                JSONObject elaboration = copsemo.getJSONObject("Elaboration");
                double ElaborationEffort = elaboration.getDouble("Effort");
                Component.setElaborationEffort(ElaborationEffort);

                double ElaborationEffortPercentage = elaboration.getDouble("EffortPercentage");
                Component.setElaborationEffortPercentage(ElaborationEffortPercentage);

                double ElaborationSchedulePercentage = elaboration.getDouble("SchedulePercentage");
                Component.setElaborationSchedulePercentage(ElaborationSchedulePercentage);

                double ElaborationMonth = elaboration.getDouble("Month");
                Component.setElaborationMonth(ElaborationMonth);

                double ElaborationPersonnel = elaboration.getDouble("Personnel");
                Component.setElaborationPersonnel(ElaborationPersonnel);

                JSONObject construction = copsemo.getJSONObject("Construction");
                double ConstructionEffort = construction.getDouble("Effort");
                Component.setConstructionEffort(ConstructionEffort);

                double ConstructionEffortPercentage = construction.getDouble("EffortPercentage");
                Component.setConstructionEffortPercentage(ConstructionEffortPercentage);

                double ConstructionSchedulePercentage = construction.getDouble("SchedulePercentage");
                Component.setConstructionSchedulePercentage(ConstructionSchedulePercentage);

                double ConstructionMonth = construction.getDouble("Month");
                Component.setConstructionMonth(ConstructionMonth);

                double ConstructionPersonnel = construction.getDouble("Personnel");
                Component.setConstructionPersonnel(ConstructionPersonnel);

                JSONObject transition = copsemo.getJSONObject("Transition");
                double TransitionEffort = transition.getDouble("Effort");
                Component.setTransitionEffort(TransitionEffort);

                double TransitionEffortPercentage = transition.getDouble("EffortPercentage");
                Component.setTransitionEffortPercentage(TransitionEffortPercentage);

                double TransitionSchedulePercentage = transition.getDouble("SchedulePercentage");
                Component.setTransitionSchedulePercentage(TransitionSchedulePercentage);

                double TransitionMonth = transition.getDouble("Month");
                Component.setTransitionMonth(TransitionMonth);

                double TransitionPersonnel = transition.getDouble("Personnel");
                Component.setTransitionPersonnel(TransitionPersonnel);

                int multiBuildShift = component.getInt("MultiBuildShift");
                Component.setMultiBuildShift(multiBuildShift);



//                subComponen
                JSONArray subcomponents = component.getJSONArray("SubComponents");
                if (subcomponents.length() == 0) {
                    COINCOMOComponentManager.updateComponent(Component, true);
                } else {
                      SubComnameDisplay = new int[subcomponents.length()];
        SubComsizeDisplay = new int[subcomponents.length()];
        SubComlaborRateDisplay = new int[subcomponents.length()];
        SubComEAFDisplay = new int[subcomponents.length()];
        SubComnewDisplay = new int[subcomponents.length()];
        SubComfunctionPointDisplay = new int[subcomponents.length()];
        SubComadaptationReuseDisplay = new int[subcomponents.length()];
        SubComx = new int[subcomponents.length()];
        
                    for (int k = 0; k < subcomponents.length(); k++) {
                        JSONObject subcomponent = subcomponents.getJSONObject(i);
                        COINCOMOSubComponent SubComponent = COINCOMOSubComponentManager.insertSubComponent(Component);
                        //                    int subcomponentID = subcomponent.getInt("ID");
                        //                    SubComponent.setNextID(subcomponentID);

                        int subcomponentDatabaseID = subcomponent.getInt("DatabaseID");
                        SubComponent.setDatabaseID(subcomponentDatabaseID);

                        String subcomponentName = subcomponent.getString("Name");
                        SubComponent.setName(subcomponentName);

                        String subcomponentSLOC = subcomponent.getString("SLOC");
                        SubComponent.setSLOC(Long.parseLong(subcomponentSLOC));

                        double subcomponentCost = subcomponent.getDouble("Cost");
                        SubComponent.setCost(subcomponentCost);

                        double subcomponentStaff = subcomponent.getDouble("Staff");
                        SubComponent.setStaff(subcomponentStaff);

                        double subcomponentEffort = subcomponent.getDouble("Effort");
                        SubComponent.setEffort(subcomponentEffort);

                        double subcomponentSchedule = subcomponent.getDouble("Schedule");
                        SubComponent.setSchedule(subcomponentSchedule);

                        double subComponentProductivity = subcomponent.getDouble("Productivity");
                        SubComponent.setProductivity(subComponentProductivity);

                        double subComponentInstructionCost = subcomponent.getDouble("InstructionCost");
                        SubComponent.setInstructionCost(subComponentInstructionCost);

                        double subComponentRisk = subcomponent.getDouble("Risk");
                        SubComponent.setRisk(subComponentRisk);

                        double subComponentNominalEffort = subcomponent.getDouble("NominalEffort");
                        SubComponent.setNominalEffort(subComponentNominalEffort);

                        double subComponentEstimatedEffort = subcomponent.getDouble("EstimatedEffort");
                        SubComponent.setEstimatedEffort(subComponentEstimatedEffort);

                        int subComponentSLOCWithoutREVL = subcomponent.getInt("SLOCWithoutREVL");
                        SubComponent.setSumOfSLOCs(subComponentSLOCWithoutREVL);

                        double subcomponentLaborRate = subcomponent.getDouble("LaborRate");
                        SubComponent.setLaborRate(subcomponentLaborRate);

                        String subcomponentLanguage = subcomponent.getString("Language");
                        SubComponent.setLanguage(subcomponentLanguage);

                        double eafv = subcomponent.getDouble("EAF");
                        SubComponent.setEAF(eafv);
                        
                        SubComnameDisplay[k] =subcomponent.getInt("nameDisplay");
        SubComsizeDisplay[k] =subcomponent.getInt("sizeDisplay");
        SubComlaborRateDisplay[k] =subcomponent.getInt("laborRateDisplay");
        SubComEAFDisplay[k] =subcomponent.getInt("EAFDisplay");
        SubComnewDisplay[k] =subcomponent.getInt("newDisplay");
        SubComfunctionPointDisplay[k] =subcomponent.getInt("functionPointDisplay");
        SubComadaptationReuseDisplay[k] =subcomponent.getInt("adaptationReuseDisplay");
        SubComx[k] =subcomponent.getInt("x");
                        
                        

                        JSONObject eaf = subcomponent.getJSONObject("EAFSettings");
                        COINCOMOConstants.Rating[] subrating = new COINCOMOConstants.Rating[18];
                        COINCOMOConstants.Increment[] subincrement = new COINCOMOConstants.Increment[18];

                        for (int outer = 0; outer < COINCOMOConstants.EAFS.length - 1; outer++) {
                            JSONObject eafset = eaf.getJSONObject(COINCOMOConstants.EAFS[outer]);
                            subrating[outer] = COINCOMOConstants.Rating.valueOf(eafset.getString("Rating"));
                            if (eafset.getString("Increment").equals("0%")) {
                                subincrement[outer] = COINCOMOConstants.Increment.Percent0;
                            }
                            if (eafset.getString("Increment").equals("25%")) {
                                subincrement[outer] = COINCOMOConstants.Increment.Percent25;
                            }
                            if (eafset.getString("Increment").equals("50%")) {
                                subincrement[outer] = COINCOMOConstants.Increment.Percent50;
                            }
                            if (eafset.getString("Increment").equals("75%")) {
                                subincrement[outer] = COINCOMOConstants.Increment.Percent75;
                            }
                        }
                        SubComponent.setEAFRatings(subrating);
                        SubComponent.setEAFIncrements(subincrement);

                        double breakage = subcomponent.getDouble("Breakage");
                        SubComponent.setREVL(breakage);

                        JSONObject New = subcomponent.getJSONObject("New");
                        SubComponent.setNewSLOC(New.getInt("NewSLOC"));

                        JSONObject fp = subcomponent.getJSONObject("FunctionPoints");

                        SubComponent.setMultiplier(fp.getInt("Multiplier"));

                        String ratioType = fp.getString("RatioType").toString();
                        if (ratioType.equals("Jones")) {
                            SubComponent.setRatioType(COINCOMOConstants.RatioType.Jones);
                        } else {
                            SubComponent.setRatioType(COINCOMOConstants.RatioType.David);
                        }

                        String calculationMethod = fp.getString("CalculationMethod").toString();
                        if (calculationMethod.equals("UsingTable")) {
                            SubComponent.setCalculationMethod(COINCOMOConstants.CalculationMethod.UsingTable);
                        } else {
                            SubComponent.setCalculationMethod(COINCOMOConstants.CalculationMethod.InputCalculatedFunctionPoints);
                        }

                        SubComponent.setTotalUnadjustedFunctionPoints(fp.getInt("TotalUnadjustedFunctionPoints"));
                        SubComponent.setEquivalentSLOC(fp.getInt("EquivalentSLOC"));

                        int[][] FP = new int[5][4];
                        JSONObject ft = fp.getJSONObject("FunctionTypes");
                        for (int outer = 0; outer < FP.length; outer++) {
                            JSONObject row = ft.getJSONObject(COINCOMOConstants.FPS2[outer]);
                            for (int inner = 0; inner < COINCOMOConstants.FTS.length; inner++) {
                                FP[outer][inner] = row.getInt(COINCOMOConstants.FTS[inner]);
                            }
                        }
                        SubComponent.setInternalLogicalFiles(FP[0]);
                        SubComponent.setExternalInterfaceFiles(FP[1]);
                        SubComponent.setExternalInputs(FP[2]);
                        SubComponent.setExternalOutputs(FP[3]);
                        SubComponent.setExternalInquiries(FP[4]);

                        JSONArray adaptationAndReuseARR = subcomponent.getJSONArray("AdaptationAndReuse");
                        for (int l = 0; l < adaptationAndReuseARR.length(); l++) {
                            //                    int adaptationAndReuseID = adaptationAndReuse.getInt("ID");
                            //                    AdaptationAndReuse.setNextID(adaptationAndReuseID);

                            JSONObject adaptationAndReuse = adaptationAndReuseARR.getJSONObject(i);
                            COINCOMOAdaptationAndReuse AdaptationAndReuse = COINCOMOAdaptationAndReuseManager.insertAdaptationAndReuse(SubComponent);

                            int adaptationAndReuseDatabaseID = adaptationAndReuse.getInt("DatabaseID");
                            AdaptationAndReuse.setDatabaseID(adaptationAndReuseDatabaseID);

                            String adaptationAndReusename = adaptationAndReuse.getString("Name");
                            AdaptationAndReuse.setName(adaptationAndReusename);

                            long adaptationAndReuseAdaptedSLOC = adaptationAndReuse.getLong("AdaptedSLOC");
                            AdaptationAndReuse.setAdaptedSLOC(adaptationAndReuseAdaptedSLOC);

                            double adaptationAndReuseAdaptedDesignModified = adaptationAndReuse.getDouble("DesignModified");
                            AdaptationAndReuse.setDesignModified(adaptationAndReuseAdaptedDesignModified);

                            double adaptationAndReuseCodeModified = adaptationAndReuse.getDouble("CodeModified");
                            AdaptationAndReuse.setCodeModified(adaptationAndReuseCodeModified);

                            double adaptationAndReuseIntegrationModified = adaptationAndReuse.getDouble("IntegrationModified");
                            AdaptationAndReuse.setIntegrationModified(adaptationAndReuseIntegrationModified);

                            double adaptationAndReuseSoftwareUnderstanding = adaptationAndReuse.getDouble("SoftwareUnderstanding");
                            AdaptationAndReuse.setSoftwareUnderstanding(adaptationAndReuseSoftwareUnderstanding);

                            double adaptationAndReuseAssessmentAndAssimilation = adaptationAndReuse.getDouble("AssessmentAndAssimilation");
                            AdaptationAndReuse.setAssessmentAndAssimilation(adaptationAndReuseAssessmentAndAssimilation);

                            double adaptationAndReuseUnfamiliarityWithSoftware = adaptationAndReuse.getDouble("UnfamiliarityWithSoftware");
                            AdaptationAndReuse.setUnfamiliarityWithSoftware(adaptationAndReuseUnfamiliarityWithSoftware);

                            double adaptationAndReuseAutomaticallyTranslated = adaptationAndReuse.getDouble("AutomaticallyTranslated");
                            AdaptationAndReuse.setAutomaticallyTranslated(adaptationAndReuseAutomaticallyTranslated);

                            double adaptationAndReuseAutomaticTranslationProductivity = adaptationAndReuse.getDouble("AutomaticTranslationProductivity");
                            AdaptationAndReuse.setAutomaticTranslationProductivity(adaptationAndReuseAutomaticTranslationProductivity);

                            double adaptationAndReuseAdaptationAdjustmentFactor = adaptationAndReuse.getDouble("AdaptationAdjustmentFactor");
                            AdaptationAndReuse.setAdaptationAdjustmentFactor(adaptationAndReuseAdaptationAdjustmentFactor);

                            long adaptationAndReuseEquivalentSLOC = adaptationAndReuse.getLong("EquivalentSLOC");
                            AdaptationAndReuse.setEquivalentSLOC(adaptationAndReuseEquivalentSLOC);


                        }
                        COINCOMOSubComponentManager.updateSubComponent(SubComponent, true);
                    }
                }

            }
        }
        return System;
    }

    private COINCOMOSystem getSampleSystem() {
        COINCOMOSystem system = COINCOMOSystemManager.insertSystem();
        system.setName("System");
        COINCOMOSubSystem subSystem = COINCOMOSubSystemManager.insertSubSystem(system);
        subSystem.setName("SubSystem");
        COINCOMOComponent component = COINCOMOComponentManager.insertComponent(subSystem);
        component.setName("Component");
        COINCOMOSubComponent subComponent = COINCOMOSubComponentManager.insertSubComponent(component);
        subComponent.setName("SubComponent");
        COINCOMOAdaptationAndReuse adaptationAndReuse = COINCOMOAdaptationAndReuseManager.insertAdaptationAndReuse(subComponent);
        adaptationAndReuse.setName("AdaptationAndReuse");

        adaptationAndReuse.setAdaptedSLOC(20000);
        adaptationAndReuse.setDesignModified(10.0d);
        adaptationAndReuse.setCodeModified(10.0d);
        adaptationAndReuse.setIntegrationModified(10.0d);
        adaptationAndReuse.setSoftwareUnderstanding(25.0d);
        adaptationAndReuse.setAssessmentAndAssimilation(4.0d);
        adaptationAndReuse.setUnfamiliarityWithSoftware(0.4d);
        adaptationAndReuse.setAutomaticallyTranslated(0.0d);
        adaptationAndReuse.setAutomaticTranslationProductivity(2400.0d);

        subComponent.setNewSLOC(10000);
        subComponent.setREVL(12.34d);

        COINCOMOAdaptationAndReuseManager.updateAdaptationAndReuse(adaptationAndReuse, true);

        return system;
    }
}