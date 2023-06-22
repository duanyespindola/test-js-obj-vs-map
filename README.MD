# The test

The test creates 100 \* 1000 (one hundred thousand) registers and then groups these registers by a chosen key.

This grouping will be created 500 times for each type (Object and Map) so that we can compare the performance on average.

In any scenario, it will check for the existence of a key 500 X 100 X 1000 times.

# Scenarios

## Only create keys / Few Keys

Grouping by age, it will not delete any keys and will create a few keys (30 keys).

## Remove key a few times / Few Keys

When the array of a given key reaches a certain size, the key will be deleted and recreated, resulting in a few key removals/creation during the process.

Grouping by age, for exemple, and keeping a maximum size in 500 items in each key will result in 200 key deletion/recreation events.

Grouping by ID will create a key for each record, resulting in a large number of keys being created.

# The result

## Grouping by age, no maximum:

Keys created: 30
Keys recreated: 0
Object Time: 4.06 ms
Map Time: 7.76 ms

## Grouping by age, maximum = 500:

Keys created: 30
Keys recreated: 190
Object Time: 4.78 ms
Map Time: 8.45 ms

## Grouping by age, maximum = 2:

Keys created: 30
Keys recreated: 50,000
Object Time: 13.15 ms
Map Time: 18.64 ms

## Grouping by ID:

Keys created: 100,000
Keys recreated: 0
Object Time: 134.92 ms
Map Time: 87.27 ms
