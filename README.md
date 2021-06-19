```mermaid
stateDiagram-v2
    justCalved --> canBeInseminated: timePassed 77
    canBeInseminated --> i_checkOne: animal inseminated
    justCalved --> icheckOne

    state inseminated {
        i_checkOne --> i_checkTwo: check success
        i_checkTwo --> i_checkThree: check success
    }
    i_checkThree --> d_checkOne
    inseminated --> canBeInseminated : if check failed

    state dried {
        d_checkOne --> d_checkTwo: check success
        d_checkTwo --> d_checkThree: check success
    }
    d_checkThree --> justCalved:calved
    dried --> canBeInseminated : if check failed

    justCalved --> removed : animal removed
    canBeInseminated --> removed :animal removed
    inseminated --> removed: animal removed
    dried --> removed: animal removed
```

# Actions

## 1.justCalved

    1. congratulate farmer
    1. remind for antibiotics
    1. set cron job for time passed and to canBeInseminated
    1. update timeline

## 2.canBeInsemiated
    1. intimate farmer
    1. update to timeline
## 3. i_checkOne
    1. Congratulate farmer.
    1. Add reminder for next check.
    1. Add reminder for 70 days before calving.
    1. Add reminder for 7 days before calving 
## 4. i_check_failed
    1. change animal state to can be inseminated.
    1. remove reminders set for calving.
## 5. i_checkN
    1. Congratulate farmer.
    1. Add reminder for next check.