
gdjs.evtsExt__Flash__FlashColor = gdjs.evtsExt__Flash__FlashColor || {};

/**
 * Behavior generated from Flash color tint
 */
gdjs.evtsExt__Flash__FlashColor.FlashColor = class FlashColor extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Flash__FlashColor.FlashColor.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HalfPeriodTime = behaviorData.HalfPeriodTime !== undefined ? behaviorData.HalfPeriodTime : Number("0.1") || 0;
    this._behaviorData.IsFlashing = false;
    this._behaviorData.FlashDuration = Number("0") || 0;
    this._behaviorData.TintColor = "\"255;255;255\"";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HalfPeriodTime !== newBehaviorData.HalfPeriodTime)
      this._behaviorData.HalfPeriodTime = newBehaviorData.HalfPeriodTime;
    if (oldBehaviorData.IsFlashing !== newBehaviorData.IsFlashing)
      this._behaviorData.IsFlashing = newBehaviorData.IsFlashing;
    if (oldBehaviorData.FlashDuration !== newBehaviorData.FlashDuration)
      this._behaviorData.FlashDuration = newBehaviorData.FlashDuration;
    if (oldBehaviorData.TintColor !== newBehaviorData.TintColor)
      this._behaviorData.TintColor = newBehaviorData.TintColor;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    HalfPeriodTime: this._behaviorData.HalfPeriodTime,
    IsFlashing: this._behaviorData.IsFlashing,
    FlashDuration: this._behaviorData.FlashDuration,
    TintColor: this._behaviorData.TintColor,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.HalfPeriodTime !== undefined)
      this._behaviorData.HalfPeriodTime = networkSyncData.props.HalfPeriodTime;
    if (networkSyncData.props.IsFlashing !== undefined)
      this._behaviorData.IsFlashing = networkSyncData.props.IsFlashing;
    if (networkSyncData.props.FlashDuration !== undefined)
      this._behaviorData.FlashDuration = networkSyncData.props.FlashDuration;
    if (networkSyncData.props.TintColor !== undefined)
      this._behaviorData.TintColor = networkSyncData.props.TintColor;
  }

  // Properties:
  
  _getHalfPeriodTime() {
    return this._behaviorData.HalfPeriodTime !== undefined ? this._behaviorData.HalfPeriodTime : Number("0.1") || 0;
  }
  _setHalfPeriodTime(newValue) {
    this._behaviorData.HalfPeriodTime = newValue;
  }
  _getIsFlashing() {
    return this._behaviorData.IsFlashing !== undefined ? this._behaviorData.IsFlashing : false;
  }
  _setIsFlashing(newValue) {
    this._behaviorData.IsFlashing = newValue;
  }
  _toggleIsFlashing() {
    this._setIsFlashing(!this._getIsFlashing());
  }
  _getFlashDuration() {
    return this._behaviorData.FlashDuration !== undefined ? this._behaviorData.FlashDuration : Number("0") || 0;
  }
  _setFlashDuration(newValue) {
    this._behaviorData.FlashDuration = newValue;
  }
  _getTintColor() {
    return this._behaviorData.TintColor !== undefined ? this._behaviorData.TintColor : "\"255;255;255\"";
  }
  _setTintColor(newValue) {
    this._behaviorData.TintColor = newValue;
  }
}

/**
 * Shared data generated from Flash color tint
 */
gdjs.evtsExt__Flash__FlashColor.FlashColor.SharedData = class FlashColorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Flash__FlashColor.FlashColor.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Flash_FlashColorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Flash_FlashColorSharedData = new gdjs.evtsExt__Flash__FlashColor.FlashColor.SharedData(
      initialData
    );
  }
  return instanceContainer._Flash_FlashColorSharedData;
}

// Methods:
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595FlashColor_9546FlashColor_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Color_Timer") > (gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("Flash_Color_Timer");
}
}{gdjs.evtsExt__Flash__ToggleColorTint.func(runtimeScene, gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595FlashColor_9546FlashColor_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, (( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTintColor()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Color_Duration_Timer") > (gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595FlashColor_9546FlashColor_9546prototype_9546FlashContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1});
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595FlashColor_9546FlashColor_9546prototype_9546FlashContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1});
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].getVariables().get("__FlashColor_StartingTint")).setString(gdjs.evtsExt__Flash__ColorTint.func(runtimeScene, gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595FlashColor_9546FlashColor_9546prototype_9546FlashContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Color_Timer");
}
}{gdjs.evtsExt__Flash__ToggleColorTint.func(runtimeScene, gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.mapOfGDgdjs_9546evtsExt_9595_9595Flash_9595_9595FlashColor_9546FlashColor_9546prototype_9546FlashContext_9546GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ColorTint") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Color_Duration_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTintColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ColorTint") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFlashDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FlashDuration")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.Flash = function(FlashDuration, ColorTint, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
if (argName === "FlashDuration") return FlashDuration;
if (argName === "ColorTint") return ColorTint;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.FlashContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.IsFlashingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i].setColor((gdjs.RuntimeObject.getVariableString(gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i].getVariables().get("__FlashColor_StartingTint"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Color_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Color_Duration_Timer");
}
}}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.Stop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.StopContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime()); }}}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTime = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.HalfPeriodTimeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext = {};
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHalfPeriodTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTime = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Flash"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Flash"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__FlashColor.FlashColor.prototype.SetHalfPeriodTimeContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Flash::FlashColor", gdjs.evtsExt__Flash__FlashColor.FlashColor);
