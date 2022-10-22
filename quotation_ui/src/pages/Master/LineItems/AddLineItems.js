
import React from "react"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddLineItems = () => {
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="Add Line Items" />

      </div>
    </React.Fragment>
  )
}

export default AddLineItems
