---
id: dxLookup.Options.grouped
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether data items should be grouped.

---
If this property is set to **true**, the object assigned to the items property should include **key** and **items** properties. The **key** property specifies the group caption in the list. The **items** property represents an array listing group items.

[note]

- Only one-level grouping is supported.

- If you enable both this property and DataSource.[paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate'), the pagination works only on the group level.

[/note]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/"
}