import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = (props) => (
   <ContentLoader
    speed={2}
    width={1550}
    height={800}
    viewBox="0 0 1550 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="531" y="969" rx="3" ry="3" width="88" height="6" />
    <rect x="543" y="965" rx="3" ry="3" width="52" height="6" />
    <rect x="489" y="964" rx="3" ry="3" width="410" height="6" />
    <rect x="491" y="969" rx="3" ry="3" width="380" height="6" />
    <rect x="563" y="963" rx="3" ry="3" width="178" height="6" />
    <circle cx="592" cy="975" r="20" />
    <rect x="558" y="963" rx="0" ry="0" width="579" height="25" />
    <rect x="563" y="971" rx="0" ry="0" width="587" height="18" />
    <rect x="552" y="907" rx="0" ry="0" width="76" height="75" />
    <rect x="572" y="960" rx="0" ry="0" width="70" height="45" />
    <rect x="557" y="964" rx="0" ry="0" width="175" height="17" />
    <rect x="564" y="942" rx="0" ry="0" width="603" height="66" />
    <rect x="310" y="929" rx="0" ry="0" width="600" height="69" />
    <rect x="570" y="968" rx="10" ry="10" width="70" height="16" />
    <rect x="552" y="970" rx="0" ry="0" width="46" height="14" />
    <rect x="540" y="953" rx="0" ry="0" width="245" height="113" />
    <rect x="561" y="961" rx="10" ry="10" width="66" height="16" />
    <rect x="534" y="955" rx="0" ry="0" width="93" height="13" />
    <rect x="557" y="954" rx="10" ry="10" width="59" height="17" />
    <rect x="561" y="979" rx="0" ry="0" width="36" height="13" />
    <rect x="556" y="970" rx="10" ry="10" width="54" height="17" />
    <rect x="563" y="964" rx="10" ry="10" width="53" height="17" />
    <rect x="557" y="951" rx="10" ry="10" width="56" height="17" />
    <rect x="234" y="975" rx="0" ry="0" width="596" height="22" />
    <rect x="6" y="6" rx="0" ry="0" width="300" height="444" />
    <rect x="527" y="850" rx="0" ry="0" width="115" height="222" />
    <rect x="552" y="968" rx="0" ry="0" width="115" height="222" />
    <rect x="560" y="973" rx="0" ry="0" width="115" height="222" />
    <rect x="346" y="918" rx="0" ry="0" width="596" height="74" />
    <circle cx="591" cy="1300" r="55" />
    <rect x="312" y="5" rx="0" ry="0" width="300" height="444" />
    <rect x="620" y="5" rx="0" ry="0" width="300" height="444" />
    <rect x="928" y="5" rx="0" ry="0" width="300" height="444" />
    <rect x="1235" y="5" rx="0" ry="0" width="300" height="444" />
  </ContentLoader>
)

export default Skeleton;