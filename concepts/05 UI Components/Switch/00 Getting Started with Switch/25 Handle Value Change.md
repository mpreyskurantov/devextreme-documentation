Users can change a component value (*state*) with a mouse click, SPACE key, or tap. Implement the [onValueChanged](/api-reference/10%20UI%20Components/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#onValueChanged') callback to handle value changes.

The following code displays a notification every time users change the Switch state:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#switch").dxSwitch({
            // ...
            onValueChanged(e) {
                // ...
                const stateLabel = e.value ? "ON" : "OFF";
                DevExpress.ui.notify(`The component is switched ${stateLabel}`); 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-switch ...
        (onValueChanged)="onValueChanged($event)"
    >
    </dx-switch>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import notify from "devextreme/ui/notify";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })

    export class AppComponent {
        // ...
        onValueChanged(e: {value: boolean}) {
            // ...
            const stateLabel = e.value ? "ON" : "OFF";
            notify(`The component is switched ${stateLabel}`); 
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSwitch ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    // ...
    import { DxSwitch } from "devextreme-vue/switch";
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxSwitch
        },
        // ...
        methods: {
            onValueChanged(e) {
                // ...
                const stateLabel = e.value ? "ON" : "OFF";
                notify(`The component is switched ${stateLabel}`);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from "react";
    import "devextreme/dist/css/dx.light.css";

    import { Switch } from "devextreme-react/switch";
    import notify from "devextreme/ui/notify";

    function App() {
        // ...
        const onValueChanged = useCallback((e) => {
            // ...
            const stateLabel = e.value ? "ON" : "OFF";
            notify(`The component is switched ${stateLabel}`); 
        }, []);

        return (
            <Switch ...
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---
