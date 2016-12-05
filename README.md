# react-test

I am trying to build a web button creator app. Below is an image where I broke the UI into smaller components. 

![alt text](https://i.stack.imgur.com/eiNgG.png "App Structure")

The app structure is as follows:

1. **Views** - There are 3 views “Desktop”, “Tablet” and “Mobile”.
2. **States** - Every view has 3 states “Normal”, “Hover” and “Active”.
3. **Button** - Every state has 1 button.
4. **Toggle** - Toggle is a collection of form fields. Every state will consist of many toggles.
5. **Fields**  - Input field, select field, etc.

Every change in field will change the button in view.

My main issue is that I have to loop through a lot of data. Below is the code I use to style a button:

    _setButtonStyle() {
            let style = {}
            let views = this._getViews()
            for (var i = views.length - 1; i >= 0; i--) {
                if( views[i].active ){
                    let view = this._getViewOptions(views[i])
                    if(view && view.length){
                        for (var i = view.length - 1; i >= 0; i--) {
                            let text = view[i].content // @TODO - make dynamic
                            for (var j = text.length - 1; j >= 0; j--) {
                                let options = text[j]
                                for (var i = options.length - 1; i >= 0; i--) {
                                    if( options[i].css ){
                                        style[options[i].id] = options[i].value + options[i].prefix
                                    }
                                    if( options[i].length ){
                                        for (var j = options[i].length - 1; j >= 0; j--) {
                                            style[options[i][j].id] = options[i][j].value + options[i][j].prefix
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
        }
        return style
    }

So, can anyone suggest me a better approach? Should I change the data structure?

Data structure is as follows -
```
{
   "structure":[
      {
         "id":"desktop",
         "name":"Desktop",
         "active":true,
         "states":{
            "normal":{
               "id":"normal",
               "parent":"desktop",
               "active":true,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            },
            "hover":{
               "id":"hover",
               "parent":"desktop",
               "active":false,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            },
            "active":{
               "id":"active",
               "parent":"desktop",
               "active":false,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            }
         }
      },
      {
         "id":"tablet",
         "name":"Tablet",
         "active":false,
         "states":{
            "normal":{
               "id":"normal",
               "parent":"tablet",
               "active":true,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            },
            "hover":{
               "id":"hover",
               "parent":"tablet",
               "active":false,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            },
            "active":{
               "id":"active",
               "parent":"tablet",
               "active":false,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            }
         }
      },
      {
         "id":"mobile",
         "name":"Mobile",
         "active":false,
         "states":{
            "normal":{
               "id":"normal",
               "parent":"mobile",
               "active":true,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            },
            "hover":{
               "id":"hover",
               "parent":"mobile",
               "active":false,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            },
            "active":{
               "id":"active",
               "parent":"mobile",
               "active":false,
               "options":[
                  {
                     "content":[
                        [
                           {
                              "type":"text",
                              "id":"text",
                              "class":"",
                              "value":"Button",
                              "prefix":false,
                              "prefix_options":false,
                              "options":false,
                              "label":false,
                              "placeholder":"Button",
                              "icon":"fa fa-text-height",
                              "css":false
                           },
                           [
                              {
                                 "type":"number",
                                 "id":"fontSize",
                                 "class":"",
                                 "value":"16",
                                 "prefix":"px",
                                 "prefix_options":[
                                    "px",
                                    "em",
                                    "%"
                                 ],
                                 "options":false,
                                 "label":"Font Size",
                                 "placeholder":"Font Size",
                                 "icon":"fa fa-text-height",
                                 "width":"14%",
                                 "css":{
                                    "target":"text",
                                    "property":"fontSize",
                                    "prefix":"px"
                                 }
                              }
                           ]
                        ]
                     ]
                  }
               ]
            }
         }
      }
   ]
}
```
