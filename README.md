#Apdex Board

### How to configure the app
Execute the command inside the project root folder:
```
npm install
```

### How to run Test
Run the test executing the follow command in project root folder:
```
npm test
```
You can see the coverge report on coverage folder in project root folder.

### How to execute App
Open the **index.html** in project folder root in any browser.

### Code organization

I organzined the code in specs (spec folder) and code (lib folder). Each domain (as Board, Host and Application), has their own class, functions and tests.

### Time complexity analysis

Before each important function there is a comment with the big O for the fucntion. Here I'm citing the most important functions:

* **getTopAppsByHost**: The time complexity is O(1) because it always return the first 25 first element for app list from the host. It's possible because the app list for each host is always sorted by desc Apdex. 
*  **addAppToHosts**: The time complexity is O(N\*M), where M is the number of hosts for the app, and N is the average number of apps in each host. This method add an App in each host list, but keep the app list sorted by desc Apdex for each host. To find the right possition, it does a binary seach that is O(N\*logN), but because Array.splice function has O(N) to insert a item in Array, it has O(N). Because it has to do it for each host, the final is O(N\*M).
*  **removeAppFromHosts**: The time compleity is O(N\*M). For each host that it should remove app, it seek the index of (Array.indexOf) this app in the app list O(N), after that use Array.splice O(N) to remove the item from the array.
*   **parseJSON**: This function create the data structure from json data file. It has time complexity O(N\*logN\*M), where M is the number hosts and N is the average number of apps in each host. It use a diffent strategy to sort the app list for each host. It not use addAppToHost, that is good to add a new app and keep the list sorted, but is not the best startegy to include many app in a list and sort it, if use this stratety the final time complexity for this function would be O(N^2\*M). Intead of it, the startegy used here was to add all the apps to app list in each host and after that, use Array.sort that has O(N\*logN), to sort the list by Apdex desc order. Because It has to do each for each host, the final is O(N\*logN\*M).
