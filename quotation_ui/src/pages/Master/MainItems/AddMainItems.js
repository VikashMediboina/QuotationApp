
import React from "react"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddMainItems = () => {
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="Add Main Items" />

      </div>
    </React.Fragment>
  )
}

export default AddMainItems
