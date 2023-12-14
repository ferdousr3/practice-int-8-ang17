# Angular 17 Version compatibility

| Name           | Version                      | Check Your Version | Official Links                                        |
| -------------- | ---------------------------- | ------------------ | ----------------------------------------------------- |
| **Node.js**    | `18.13.0 - 20.9.0 / @latest` | `node -v`          | [Node.js](https://nodejs.org/en)                      |
| **Typescript** | `>=4.9.3 <5.3.0 / @latest`   | `tsc -v / tsc -h`  | [Typescript](https://www.typescriptlang.org/download) |
| **Npm** | ` @latest`   | `npm -v`  | [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |

## Install process of angular

### 1. Install nodejs, typescript, npm .

Nodejs `18.13.0 - 20.9.0 / @latest`
<br/>

Npm ` @latest`
<br/>

Typescript `>=4.9.3 <5.3.0 / @latest`

### 2. Angular CLI - The CLI tool for Angular(latest) .

```
npm i @angular/cli
```
### 3. Create angular project .

`ng new [project name]`

```
ng new demo
```
### For angular-17 
<br/>

> **_NOTE:_**  By default angular 17 create standalone component but if you don't want to create standalone component then execute the below command  .
 
`ng new [project name] --standalone false`
```
ng new demo --standalone false
```

### 4. Choose styling (css or scss by clicking keyboard up and down arrow key) .

`css`
`scss`

### 5. Server side rendering  .

` Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? - n / y` 


## Run Angular 

```
ng serve --o
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Create component

  `ng g c [component name]` 

```
ng g c home 
```
### Create module

  `ng g m [module name]` 

```
ng g m home 
```

### Create module with routing module

  `ng g m [module name] --routing` 

```
ng g m home --routing
```
### Create standalone component

  `ng g c [module name] --standalone true` 

```
ng g c home --standalone true
```


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Class Slider

Run `Slider` to execute the unit tests via [Slider](https://docs.google.com/presentation/d/1I3O-rpedN2UBuAt-Ubiv1eKmS0lQbuBNphOzBHAQj7c/edit?usp=sharing).



