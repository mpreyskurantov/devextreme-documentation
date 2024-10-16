For minor customization of nodes, you can define [specific fields](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/') in node data objects. For example, the following code adds an icon to each node.

---

##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        icon: '/pics/fruits.ico',
        items: [
            { id: '1_1', text: 'Apples', icon: '/pics/fruits/apple.ico' },
            { id: '1_2', text: 'Oranges', icon: '/pics/fruits/orange.ico' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        icon: '/pics/vegetables.ico',
        items: [
            { id: '2_1', text: 'Cucumbers', icon: '/pics/vegetables/cucumber.ico' },
            { id: '2_2', text: 'Tomatoes', icon: '/pics/vegetables/tomato.ico' }
        ]
    }]

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData" >
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            id: '1',
            text: 'Fruits',
            icon: '/pics/fruits.ico',
            items: [
                { id: '1_1', text: 'Apples', icon: '/pics/fruits/apple.ico' },
                { id: '1_2', text: 'Oranges', icon: '/pics/fruits/orange.ico' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            icon: '/pics/vegetables.ico',
            items: [
                { id: '2_1', text: 'Cucumbers', icon: '/pics/vegetables/cucumber.ico' },
                { id: '2_2', text: 'Tomatoes', icon: '/pics/vegetables/tomato.ico' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            :items="hierarchicalData" 
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        icon: '/pics/fruits.ico',
        items: [
            { id: '1_1', text: 'Apples', icon: '/pics/fruits/apple.ico' },
            { id: '1_2', text: 'Oranges', icon: '/pics/fruits/orange.ico' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        icon: '/pics/vegetables.ico',
        items: [
            { id: '2_1', text: 'Cucumbers', icon: '/pics/vegetables/cucumber.ico' },
            { id: '2_2', text: 'Tomatoes', icon: '/pics/vegetables/tomato.ico' }
        ]
    }];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                hierarchicalData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        icon: '/pics/fruits.ico',
        items: [
            { id: '1_1', text: 'Apples', icon: '/pics/fruits/apple.ico' },
            { id: '1_2', text: 'Oranges', icon: '/pics/fruits/orange.ico' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        icon: '/pics/vegetables.ico',
        items: [
            { id: '2_1', text: 'Cucumbers', icon: '/pics/vegetables/cucumber.ico' },
            { id: '2_2', text: 'Tomatoes', icon: '/pics/vegetables/tomato.ico' }
        ]
    }];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    items={hierarchicalData} />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemTemplate').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: treeViewData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<i>" + itemData.text + "</i>");
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        itemTemplate="itemTemplate">
        <div *dxTemplate="let itemObj of 'itemTemplate'">
            <i>{{itemObj.text}}</i>
        </div>
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            id: '1',
            text: 'Fruits',
            items: [
                { id: '1_1', text: 'Apples' },
                { id: '1_2', text: 'Oranges' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            items: [
                { id: '2_1', text: 'Cucumbers' },
                { id: '2_2', text: 'Tomatoes' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeView
            :items="hierarchicalData">
            <template #item="item">
                <i>{{ item.data.text }}</i>
            </template>           
        </DxTreeView>    
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView } from 'devextreme-vue/tree-view';

    const hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples' },
            { id: '1_2', text: 'Oranges' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        items: [
            { id: '2_1', text: 'Cucumbers' },
            { id: '2_2', text: 'Tomatoes' }
        ]
    }];

    export default {
        components: {
            DxTreeView
        },
        data() {
            return {
                hierarchicalData
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeView from 'devextreme-react/tree-view';

    const hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples' },
            { id: '1_2', text: 'Oranges' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        items: [
            { id: '2_1', text: 'Cucumbers' },
            { id: '2_2', text: 'Tomatoes' }
        ]
    }];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    itemRender={this.renderTreeViewItem}
                    items={hierarchicalData} />
            );
        }

        renderTreeViewItem(item) {
            return (
                <i>{item.text}</i>
            );
        }
    }

    export default App;

---

---
##### jQuery

You can also customize individual nodes. Declare them as scripts and reference them in the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#template') property or assign a customization function straight to this property.

    <!--HTML-->
    <div id="treeViewContainer"></div>
    <script id="individualItemTemplate" type="text/html">
        <p>Oranges</p>
    </script>
    
    <!--JavaScript-->
    var treeViewData = [{
        id: '1',
        text: 'Fruits',
        items: [{
            template: function() {
                return "<i>Apples</i>";
            }
        }, {
            template: $("#individualItemTemplate")
        }
        ]
    },
    // ...
    ];

##### Angular

You can also customize individual nodes. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component.

    <!--HTML-->
    <dx-tree-view>
        <dxi-item>
            <i>Apples</i>
        </dxi-item>
        <dxi-item>
            <p>Oranges</p>
        </dxi-item>
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

##### Vue

You can also customize individual nodes. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component.

    <!-- tab: App.vue -->
    <template>
        <DxTreeView>
            <DxItem>
                <template #default>
                    <i>Apples</i>
                </template>
            </DxItem>
            <DxItem>
                <template #default>
                    <p>Oranges</p>
                </template>
            </DxItem>
        </DxTreeView>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeView, DxItem } from 'devextreme-vue/tree-view';

    export default {
        components: {
            DxTreeView,
            DxItem
        }
    };
    </script>

##### React

You can also customize individual nodes. Declare them using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/dxItem/') component.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeView, { Item } from 'devextreme-react/tree-view';

    class App extends React.Component {
        render() {
            return (
                <TreeView>
                    <Item>
                        <i>Apples</i>
                    </Item>
                    <Item>
                        <p>Oranges</p>
                    </Item>
                </TreeView>
            );
        }
    }

    export default App;

---



#####See Also#####
- [Built-In Icon Library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library')
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization)
- [TreeView API Reference](/api-reference/10%20UI%20Components/dxTreeView '/Documentation/ApiReference/UI_Components/dxTreeView/')

[tags]treeview, tree view, item appearance, customize, templates, template, custom template
