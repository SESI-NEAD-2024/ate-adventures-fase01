gdjs.Inicio_95sem_95scormCode = {};
gdjs.Inicio_95sem_95scormCode.localVariables = [];
gdjs.Inicio_95sem_95scormCode.GDTela_9595InicialObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDTela_9595InicialObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDLoadscreenObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDLoadscreenObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDJogarObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDJogarObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDPlayer_9595NomeObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDPlayer_9595NomeObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDFaseObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDFaseObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDTentar_9595NovamenteObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDTentar_9595NovamenteObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDOh_9595NaoObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDOh_9595NaoObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDThinkingObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDThinkingObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDBox_959502Objects1= [];
gdjs.Inicio_95sem_95scormCode.GDBox_959502Objects2= [];
gdjs.Inicio_95sem_95scormCode.GDBG_9595opacity_9595ModalObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDBG_9595opacity_9595ModalObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDProximo_9595ControlesObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDProximo_9595ControlesObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDControlesObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDControlesObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDDoor_9595EmoteObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDDoor_9595EmoteObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDLapis_9595HitObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDLapis_9595HitObjects2= [];
gdjs.Inicio_95sem_95scormCode.GDLife_9595GetObjects1= [];
gdjs.Inicio_95sem_95scormCode.GDLife_9595GetObjects2= [];


gdjs.Inicio_95sem_95scormCode.mapOfGDgdjs_9546Inicio_959595sem_959595scormCode_9546GDJogarObjects1Objects = Hashtable.newFrom({"Jogar": gdjs.Inicio_95sem_95scormCode.GDJogarObjects1});
gdjs.Inicio_95sem_95scormCode.mapOfGDgdjs_9546Inicio_959595sem_959595scormCode_9546GDCreditosObjects1Objects = Hashtable.newFrom({"Creditos": gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1});
gdjs.Inicio_95sem_95scormCode.mapOfGDgdjs_9546Inicio_959595sem_959595scormCode_9546GDVoltarObjects1Objects = Hashtable.newFrom({"Voltar": gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1});
gdjs.Inicio_95sem_95scormCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Creditos"), gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.Inicio_95sem_95scormCode.GDJogarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.Inicio_95sem_95scormCode.mapOfGDgdjs_9546Inicio_959595sem_959595scormCode_9546GDJogarObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.Inicio_95sem_95scormCode.mapOfGDgdjs_9546Inicio_959595sem_959595scormCode_9546GDCreditosObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.Inicio_95sem_95scormCode.mapOfGDgdjs_9546Inicio_959595sem_959595scormCode_9546GDVoltarObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.Inicio_95sem_95scormCode.GDJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Inicio_95sem_95scormCode.GDJogarObjects1.length;i<l;++i) {
    if ( gdjs.Inicio_95sem_95scormCode.GDJogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Inicio_95sem_95scormCode.GDJogarObjects1[k] = gdjs.Inicio_95sem_95scormCode.GDJogarObjects1[i];
        ++k;
    }
}
gdjs.Inicio_95sem_95scormCode.GDJogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Creditos"), gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1.length;i<l;++i) {
    if ( gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1[k] = gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1[i];
        ++k;
    }
}
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Creditos");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1.length;i<l;++i) {
    if ( gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1[k] = gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1[i];
        ++k;
    }
}
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Creditos");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}}

}


};

gdjs.Inicio_95sem_95scormCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Inicio_95sem_95scormCode.GDTela_9595InicialObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDTela_9595InicialObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLoadscreenObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLoadscreenObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDJogarObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDJogarObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDPlayer_9595NomeObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDPlayer_9595NomeObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDFaseObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDFaseObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDTentar_9595NovamenteObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDTentar_9595NovamenteObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDOh_9595NaoObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDOh_9595NaoObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDThinkingObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDThinkingObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBox_959502Objects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBox_959502Objects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBG_9595opacity_9595ModalObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBG_9595opacity_9595ModalObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDProximo_9595ControlesObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDProximo_9595ControlesObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDControlesObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDControlesObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDDoor_9595EmoteObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDDoor_9595EmoteObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLapis_9595HitObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLapis_9595HitObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLife_9595GetObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLife_9595GetObjects2.length = 0;

gdjs.Inicio_95sem_95scormCode.eventsList0(runtimeScene);
gdjs.Inicio_95sem_95scormCode.GDTela_9595InicialObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDTela_9595InicialObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLoadscreenObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLoadscreenObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDJogarObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDJogarObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDCreditosObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDVoltarObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDPlayer_9595NomeObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDPlayer_9595NomeObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDFaseObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDFaseObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDTentar_9595NovamenteObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDTentar_9595NovamenteObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDOh_9595NaoObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDOh_9595NaoObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDThinkingObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDThinkingObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBox_959502Objects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBox_959502Objects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBG_9595opacity_9595ModalObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDBG_9595opacity_9595ModalObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDProximo_9595ControlesObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDProximo_9595ControlesObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDControlesObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDControlesObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDDoor_9595EmoteObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDDoor_9595EmoteObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLapis_9595HitObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLapis_9595HitObjects2.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLife_9595GetObjects1.length = 0;
gdjs.Inicio_95sem_95scormCode.GDLife_9595GetObjects2.length = 0;


return;

}

gdjs['Inicio_95sem_95scormCode'] = gdjs.Inicio_95sem_95scormCode;
