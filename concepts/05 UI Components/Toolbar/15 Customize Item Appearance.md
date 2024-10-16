For a minor customization of Toolbar items, you can define [specific fields](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/') in item data objects. For example, the following code generates four toolbar items: the first is a UI component, the second is hidden, the third is disabled, the fourth is relocated.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back'
                },
                location: 'before'
            }, {
                text: 'Change',
                locateInMenu: 'always',
                visible: false
            }, {
                text: 'Remove',
                locateInMenu: 'always',
                disabled: true
            }, {
                text: 'Products',
                location: 'center'
            }]
        });
    });

    <!--HTML-->
    <div id="toolbarContainer"></div>

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item
            widget="dxButton"
            location="before"
            [options]="buttonOptions">
        </dxi-item>
        <dxi-item
            text="Change"
            locateInMenu="always"
            [visible]="false">
        </dxi-item>
        <dxi-item
            text="Remove"
            locateInMenu="always"
            [disabled]="true">
        </dxi-item>
        <dxi-item
            text="Products"
            location="center">
        </dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        buttonOptions = {
            type: 'back',
            text: 'Back'
        };
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <DxToolbar>
            <DxItem
                widget="dxButton"
                location="before"
                :options="buttonOptions"
            />
            <DxItem
                text="Change"
                locate-in-menu="always"
                :visible="false"
            />
            <DxItem
                text="Remove"
                locate-in-menu="always"
                :disabled="true"
            />
            <DxItem
                text="Products"
                location="center"
            />
        </DxToolbar>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';

    export default {
        components: {
            DxToolbar,
            DxItem
        },
        data() {
            return {
                buttonOptions: {
                    type: 'back',
                    text: 'Back'
                }
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Toolbar, Item } from 'devextreme-react/toolbar';

    const buttonOptions = {
        type: 'back',
        text: 'Back'
    };

    class App extends React.Component {
        render() {
            return (
                <Toolbar>
                    <Item
                        widget="dxButton"
                        location="before"
                        options={buttonOptions}
                    />
                    <Item
                        text="Change"
                        locateInMenu="always"
                        visible={false}
                    />
                    <Item
                        text="Remove"
                        locateInMenu="always"
                        disabled={true}
                    />
                    <Item
                        text="Products"
                        location="center"
                    />
                </Toolbar>
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#itemTemplate') and [menuItemTemplate](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/menuItemTemplate.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#menuItemTemplate') to customize toolbar items and commands in the overflow menu, respectively.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: toolbarItems,
            itemTemplate: function(itemData, itemIndex, itemElement) {
                itemElement.append("<b style='color: green;'>" + itemData.text + "</b>");
            },
            menuItemTemplate: function(itemData, itemIndex, itemElement) {
                itemElement.append("<b style='font-style: italic;'>" + itemData.text + "</b>");
            }
        });
    });

    <!--HTML-->
    <div id="tabPanelContainer"></div>

##### Angular

    <!--HTML-->
    <dx-toolbar 
        [items]="toolbarItems"
        itemTemplate="itemTemplate"
        menuItemTemplate="menuItemTemplate">
        <div *dxTemplate="let item of 'itemTemplate'">
            <b style="color: green;">{{item.text}}</b>
        </div>
        <div *dxTemplate="let menuItem of 'menuItemTemplate'">
            <b style="font-style: italic;">{{menuItem.text}}</b>
        </div>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        toolbarItems = [{
            text: 'Back',
            location: 'before'
        }, {
            text: 'Change',
            locateInMenu: 'always'
        }, {
            text: 'Remove',
            locateInMenu: 'always'
        }, {
            text: 'Products',
            location: 'center'
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar
            :items="toolbarItems"
            item-template="itemTemplate"
            menu-item-template="menuItemTemplate">
            <template #itemTemplate="{ data }">
                <b style="color: green;">{{data.text}}</b>
            </template>
            <template #menuItemTemplate="{ data }">
                <b style="font-style: italic;">{{data.text}}</b>
            </template>
        </DxToolbar>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxToolbar from 'devextreme-vue/toolbar';

    export default {
        components: {
            DxToolbar
        },
        data() {
            return {
                toolbarItems: [{
                    text: 'Back',
                    location: 'before'
                }, {
                    text: 'Change',
                    locateInMenu: 'always'
                }, {
                    text: 'Remove',
                    locateInMenu: 'always'
                }, {
                    text: 'Products',
                    location: 'center'
                }]
            };
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Toolbar } from 'devextreme-react/toolbar';

    const toolbarItems = [{
        text: 'Back',
        location: 'before'
    }, {
        text: 'Change',
        locateInMenu: 'always'
    }, {
        text: 'Remove',
        locateInMenu: 'always'
    }, {
        text: 'Products',
        location: 'center'
    }];

    class App extends React.Component {
        render() {
            return (
                <Toolbar
                    items={toolbarItems}
                    itemRender={this.renderItem}
                    menuItemRender={this.renderMenuItem}
                />
            );
        }

        renderItem(data) {
            return (
                <b style={{ color: 'green' }}>{data.text}</b>
            );
        }

        renderMenuItem(data) {
            return (
                <b style={{ fontStyle: 'italic' }}>{data.text}</b>
            );
        }
    }

    export default App;

---

---
##### jQuery

You can also customize an individual toolbar item or menu command. For this purpose, declare a template for this item or command as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#template') or [menuItemTemplate](/api-reference/_hidden/dxToolbarItem/menuItemTemplate.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#menuItemTemplate') property, respectively.

    <!--JavaScript-->
    var toolbarItems = [{
        text: "Back",
        location: "before",
        template: $("#individualItemTemplate")
    }, {
        text: "Change",
        locateInMenu: "always",
        menuItemTemplate: $("#individualMenuItemTemplate")
    },
    // ...
    ];

    <!--HTML-->
    <script id="individualItemTemplate" type="text/html">
        <!-- ... -->
    </script>

    <script id="individualMenuItemTemplate" type="text/html">
        <!-- ... -->
    </script>

---



#####See Also#####
- [Toolbar - Specify Item Type](/concepts/05%20UI%20Components/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/UI_Components/Toolbar/Specify_Item_Type')
- [Toolbar - Specify Item Location](/concepts/05%20UI%20Components/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/UI_Components/Toolbar/Specify_Item_Location')
- [Toolbar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview)
- [Toolbar API Reference](/api-reference/10%20UI%20Components/dxToolbar '/Documentation/ApiReference/UI_Components/dxToolbar/')

[tags]toolbar, item appearance, customize, templates, template, custom template
