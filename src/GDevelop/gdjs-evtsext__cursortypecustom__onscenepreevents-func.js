
if (typeof gdjs.evtsExt__CursorTypeCustom__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CursorTypeCustom__onScenePreEvents = {};


gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.userFunc0x8b9c78 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Reset to default cursor
runtimeScene.getGame().getRenderer().getCanvas().style.cursor =
    runtimeScene
        .getGame()
        .getVariables()
        .get("__CursorType").getChild("DefaultCursor")
        .getAsString();

};
gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("__CursorType").getChild("ZOrderSorting").setNumber(0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CursorType").getChild("DefaultCursor")) == "pointer";
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("__CursorType").getChild("DefaultCursor").setString("default");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("__CursorType").getChild("DefaultCursor").setString("default");
}}

}


{


gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.userFunc0x8b9c78(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CursorTypeCustom"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CursorTypeCustom"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__CursorTypeCustom__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
