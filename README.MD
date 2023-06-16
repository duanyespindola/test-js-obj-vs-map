# Performance comparsion Object vs Map

## The test

The test creates 100 \* 1000 (one hundred thousands) registers and than group theese register by a choosen key.

This group will be created 500 times in each tipe ( Object an a Map) so we can have a average time to compair the performance

In any scenario it will check for the existence for a key 500 _ 100 _ 1000 times.

## Scenarios

### Only create keys / Few Keys

Grouping by age, it will not delete any key and will create few keys (30 keys) and will never remove any of then

### Remove key few times / Few Keys

When a key reaches a certain size, it will be deleted an recreat, so it will have a few key removals during the process.

Grouping by age and keeping 500 itens at max in each key, it will occur 200 deletion of keys

500 = 190 keys deleted/recreated
2 = 50.000 keys deleted/recreated
