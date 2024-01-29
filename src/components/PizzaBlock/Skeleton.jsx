import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-7" y="261" rx="15" ry="15" width="272" height="22" /> 
    <rect x="157" y="374" rx="0" ry="0" width="0" height="29" /> 
    <rect x="1" y="302" rx="10" ry="10" width="267" height="74" /> 
    <rect x="1" y="403" rx="18" ry="18" width="81" height="39" /> 
    <circle cx="138" cy="134" r="106" /> 
    <circle cx="587" cy="165" r="28" /> 
    <rect x="132" y="395" rx="27" ry="27" width="133" height="46" />
  </ContentLoader>
)

export default Skeleton