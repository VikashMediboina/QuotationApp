

import React from "react"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddQuotation = () => {
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="Add Quotation" />

      </div>
    </React.Fragment>
  )
}

export default AddQuotation