---
id: dxFormSimpleItem.template
type: template
---
---
##### shortDescription
A template that can be used to replace the default editor with custom content.

##### param(data): Object
The item's data.

##### field(data.component): dxForm
The Form instance.

##### field(data.dataField): String
The item's [dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField').

##### field(data.editorOptions): Object
The item editor's [configuration](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions').

##### field(data.editorType): String
The editor's [type](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType').

##### field(data.name): String
The item's [name](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#name').

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
A template name or container.

---

---
##### Angular

#include api-form-simpleitem-template

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="customer"
        validationGroup="customerData">
        <!-- ... -->
        <dxi-item>
            <dxo-label text="Date of birth"></dxo-label>
            <div *dxTemplate>
                <dx-date-box
                    [(value)]="customer.BirthDate">
                    <dx-validator
                        validationGroup="customerData">
                        <dxi-validation-rule 
                            type="required"
                            message="Date of birth is required">
                        </dxi-validation-rule>
                        <dxi-validation-rule 
                            type="range"
                            [max]="maxDate"
                            message="You must be at least 21 years old">
                        </dxi-validation-rule>
                    </dx-validator>
                </dx-date-box>
            </div>
        </dxi-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        customer = {
            Email: "",
            FullName: "",
            BirthDate: null
        };
        maxDate: Date = new Date().setYear(new Date().getYear() - 21);
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

#include api-form-simpleitem-template

    <!-- tab: App.vue -->
    <template>
        <DxForm
            :form-data="customer"
            validation-group="customerData">
            <!-- ... -->
            <DxSimpleItem>
                <DxLabel text="Date of birth" />
                <template #default>
                    <DxDateBox
                        v-model:value="customer.BirthDate">
                        <DxValidator
                            validation-group="customerData">
                            <DxRequiredRule message="Date of birth is required" />
                            <DxRangeRule
                                :max="maxDate"
                                message="You must be at least 21 years old"
                            />
                        </DxValidator>
                    </DxDateBox>
                </template>
            </DxSimpleItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem,
        DxLabel
    } from 'devextreme-vue/form';
    import DxDateBox from 'devextreme-vue/date-box';
    import DxValidator, {
        DxRequiredRule,
        DxRangeRule
    } from 'devextreme-vue/validator';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxLabel,
            DxDateBox,
            DxValidator,
            DxRequiredRule,
            DxRangeRule
        },
        data() {
            return {
                customer: {
                    Email: "",
                    FullName: "",
                    BirthDate: null
                },
                maxDate: new Date().setYear(new Date().getYear() - 21);
            }
        }
    }
    </script>

##### React

#include api-form-simpleitem-template

    <!-- tab: App.js -->
    import React, { useState } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Form, {
        SimpleItem,
        Label
    } from 'devextreme-react/form';
    import DateBox from 'devextreme-react/date-box';
    import Validator, {
        RequiredRule,
        RangeRule
    } from 'devextreme-react/validator';

    export default function App() {
        const [customer, setCustomer] = useState({
            Email: "",
            FullName: "",
            BirthDate: null
        });

        const maxDate = new Date().setYear(new Date().getYear() - 21);

        const updateBirthDate = e => {
            setCustomer(prevState => ({
                ...prevState,
                BirthDate: e.value;
            }));
        };

        return (
            <Form formData={customer} validationGroup="customerData">
                {/* ... */}
                <SimpleItem>
                    <Label text="Date of birth" />
                    <DateBox value={customer.BirthDate} onValueChanged={updateBirthDate}>
                        <Validator validationGroup="customerData">
                            <RequiredRule message="Date of birth is required" />
                            <RangeRule
                                max={maxDate}
                                message="You must be at least 21 years old"
                            />
                        </Validator>
                    </DateBox>
                </SimpleItem>
            </Form>
        );
    }

---

#include common-githubbutton with {
    url: "https://github.com/DevExpress-Examples/Form-Custom-items"
}

[note] If you customize the built-in DataGrid Form, refer to the following help topic for implementation specificities: [DataGrid Form Editor Customization](/concepts/05%20UI%20Components/DataGrid/20%20Editing/43%20Customize%20Edit%20Form '/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Edit_Form').

#####See Also#####
- [Customize a Simple Item](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/#Customize_a_Simple_Item')
