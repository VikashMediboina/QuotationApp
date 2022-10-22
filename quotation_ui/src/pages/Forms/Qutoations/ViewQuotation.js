

import React from "react"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const ViewQuotation = () => {
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Quotation" />

      </div>
    </React.Fragment>
  )
}

export default ViewQuotation