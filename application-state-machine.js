
const superS = {
  initial: 'walk',
  states: {
    walk: {
      onDone: {
        target: 'justCalved'
      }
    },

  }
}

const appstate = Machine({
  initial: "justCalved",
  states: {
    animalRemoved: {
      type: "final",
      actions: ["alertFarmer"]
    },
    justCalved: {
      actions: ['congratulateFarmer', 'remindOfAntibiotics','setFunctionToMoveStateToCanBeInseminated'],
      on: {
        removed: "animalRemoved",
        pastTime: "canBeInseminated",
        inseminated: "inseminationCheckOne",
      },
    },
    canBeInseminated: {
      actions:['remindFarmer'],
      on: {
        removed: "animalRemoved",
        inseminated: "inseminationCheckOne",
      },
    },
    inseminationCheckOne: {
      on: {
        removed: "animalRemoved",
        checkFailed: "inseminationCheckOneFailed",
        checkPassed: "inseminationCheckTwo",
      },
    },
    inseminationCheckOneFailed: {
        // id: 'cms',// right now needs renaming
        onDone: {
          target: "canBeInseminated",
        },
      
    },
    inseminationCheckTwo: {
      on: {
        removed: "animalRemoved",
        checkFailed: "canBeInseminated",
        checkPassed: "inseminationCheckThree",
      },
    },
    inseminationCheckThree: {
      on: {
        removed: {
          target: "animalRemoved"
        },
        checkFailed: "canBeInseminated",
        checkPassed: "driedCheckOne",
      },
    },
    driedCheckOne: {
      on: {
        removed: "animalRemoved",
        checkFailed: "canBeInseminated",
        checkPassed: "driedCheckTwo",
      },
    },
    driedCheckTwo: {
      on: {
        removed: "animalRemoved",
        checkFailed: "justCalved",
        calved: "justCalved",
      },
    },
    ...superS
  },

  activities: {
    alertCustomer: () => {
      console.log("alertedCustomer");
    },
  },
  actions:{
      congratulateFarmer: ()=> {
          console.log("Congratulations would you like to name the calf")
      },
      remindOfAntibiotics: ()=> {
          console.log("A message shoul be sent to farmer in 3 days")
      },
      setFunctionToMoveStateToCanBeInseminated: ()=> {
        console.log("automaticaally move state, and alert customer")
      },
      alerFarmer: ()=> {
        console.log("alert farmer that animal is remove and set read animal to false")
      }
  }
});
