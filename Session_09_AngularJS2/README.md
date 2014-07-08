<a name="AngularJSIntro2" />
# Intro to AngularJS - Part 2#
==========

## Overview ##

In the previous session, we learned how to add AngularJS to our website, and use it to implement the display of data in our Application.  We created a **"Model"** which was our Station/Train data, We created a **View** to display that data, which was basically the markup in the **Stations Column** in the **"index.html"** file, and we created a **Controller** called **MainCtrl** in the **"bartNowApp.js"** file.  

In this session we will continue to use AngularJS to enhance our site.  First, we'll use an AngularJS **Service** to retrieve the current position from the web browser's built-in geoLocation capabilities. Then we'll create our own custom **bart-map** directive to allow angular to show a Bing Maps map with the current position, as well as the stations on it.  Then, we'll add a second **page** or **view** to our application to show more detailed data about the trains for a stations and setup routes to navigate between the views.  Lastly, once you have implemented a NodeJS service, we'll point our front end at it! Let's go!

## Objectives ##

At the end of this session, you should be able to 

- Create an Angular Service
- Create and Angular Directive
- Work with Multiple Routes and Views

## Setup ##

The files you need to get started are included in the directory structure along with this file.  However, it is assumed that:

- You have **Visual Studio 2013** 
- You have the files included with this session:
	- The **"/Assets"** directory contains the various libraries and additional files you will add to the website you build in this session.
	- The **/AngularJS1BeginSollution"** directory contains the completed site from the previous Bootstrap session. If you had a problem with your site from the previous session, you can use this folder as a starting point.  
	- The **"/AngularJS1EndSolution"** directory contains the completed site for this session.  You can use this as a reference.  

## Exercises ##

This session is broken down into some exercises.  You need to complete them in order.  

1. [Create a Service to get our Position](#GetPosition)
1. [Create a Directive to Display the Map](#MapDirective)
1. [Set up Routes and Views](#RoutesAndViews)
1. [AFTER NODEJS LABS - Retrieve Data From Live Service](#LiveService)

---

<a name="GetPosition" />
## Create a Service to get our Position ##

---


<a name="MapDirective" />
## Create a Directive to Display the Map ##

---

<a name="RoutesAndViews" />
## Set up Routes and Views ##

---

<a name="LiveService" />
## AFTER NODEJS LABS - Retrieve Data From Live Service ##

---