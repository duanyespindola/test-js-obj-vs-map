# Performance comparsion Object vs Map

## The test

The test creates 100 \* 1000 (one hundred thousands) registers and than group theese register by a choosen key.

This group will be created 500 times in each type ( Object an a Map) so we can have a average time to compair the performance

In any scenario it will check for the existence for a key 500 X 100 X 1000 times.

## Scenarios

### Only create keys / Few Keys

Grouping by age, it will not delete any key and will create few keys (30 keys).

### Remove key few times / Few Keys

When a key reaches a certain size, it will be deleted an recreat, so it will have a few key removals during the process.

Grouping by age and keeping 500 itens at max in each key, it will occur 200 deletion/recreation of keys

500 = 190 keys deleted/recreated
2 = 50000 keys deleted/recreated

### Creating 100 x 1000 keys

Grouping by id it will create a key for each record, so it will by many many many keys created

## The result

|                | by age, no max | by age, max = 500 | by age, max = 2 | by id     |
| -------------- | -------------- | ----------------- | --------------- | --------- |
| Keys created   | 30             | 30                | 30              | 100k      |
| Keys recreated | 0              | 190               | 50000           | 0         |
| Obj Time       | 4.06 ms        | 4.78 ms           | 13,15 ms        | 134.92 ms |
| Map Time       | 7.76 ms        | 8.45 ms           | 18.64 ms        | 87.27 ms  |
