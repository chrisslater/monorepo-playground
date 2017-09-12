## Goals

* __Seamless debugging__ - I should be able to debug between my packages
* __Seamless development__ - If I update a module I should be able to get instant feedback in the other module
* __Performance__ - Booting up the application needs to be quick, updating the application and rebooting needs to be quick
* __Simple workflow__ - No complicated steps to get up and running and keep running over a long period of time


## Yarn workspaces

* easy to install dependencies
* can `yarn install` anywhere in the repo and it will install
* caching!

* In docker means that you can cache the yarn install from the lock file
* Consistant install accross envirnonments


## Further reading

* http://jdlm.info/articles/2016/03/06/lessons-building-node-app-docker.html