# MyHeritage stats

Main goal of this app is to get some statistics of your ancestors, eg how old was the youngest woman who got married, how was biggest age difference in marriage, who had the biggest number of children etc.
This project aims to develop desktop application with Electron that can connect to your SQLite MyHeritage database (simply change the extension of your MyHeritage local app DB) and enables you to see a lot of statistics with plenty filters

## How to use

Simply change the extension of your local MyHeritage database from .ftb to .sqlite and put the file into main folder. Now go to DB/manager.js and change database name:

```
const dbPath = path.resolve(__dirname, "../[your DB name].sqlite");
```

## Versions and Further Development

1. Initialize basic app and fetch simple data from DB ✅
2. Counting how many times certain name appeared ✅
3. The oldest (how long did he/she live) person in the family tree 🛠️
4. First version of UI (simple and nice looking dashboard)
5. Who had the biggest number of children + average number of children
6. Date filter for previous and future functionalities
7. The youngest bride, the youngest parents
8. Differences between suposes (max and average)
9. The longest and shortest mariages
10. Percentage of how many children survived untill adulthood (16+)
11. Further bug fixing, design upgrades

August 2024 by Bartosz Kloc
