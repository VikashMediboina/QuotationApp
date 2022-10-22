
import React from "react"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const ViewLineItems = () => {
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Line Items" />

      </div>
    </React.Fragment>
  )
}

export default ViewLineItems
