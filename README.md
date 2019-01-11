SAPUI5 Planning application
===========================

Application to test multiple features of the framework:

* unit testing
* nested components (component usages, inbound/outbound plugs, data binding),
* data binding (associations, compositions & element binding) => ManagedComponent
* custom controls (enhancing existing controls, play with streaming data).
* custom annotations & xml preprocessing
* extension points

## Local setup
```bash
git clone https://github.com/DoublG/sapui5_planning
cd sapui5_planning
npm config set @sap:registry=https://npm.sap.com
npm install
```

## Start local development server with livereload
```bash
grunt dev-server
```

## Build and start local server
```bash
grunt dist-server
```
