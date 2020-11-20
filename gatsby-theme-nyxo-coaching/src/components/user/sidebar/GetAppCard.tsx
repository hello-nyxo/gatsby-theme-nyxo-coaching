import React from "react"
import Card from "../Card/Card"
import { IconRegular } from "../icons/IconRegular"
import styles from "./GetTheAppCard.module.scss"
import { useTranslation } from "react-i18next"

const GetTheAppCard = () => {
  const { t } = useTranslation()
  return (
    <Card>
      <div className={styles.title + " is-hidden-mobile"}>
        {t("Get the app")}
      </div>

      <div className={styles.paragraph}>{t("GET_APP_INTRO")}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <a
          className={styles.appStoreLink}
          href="https://apps.apple.com/us/app/nyxo/id1440417031">
          <div>
            <IconRegular
              height={20}
              width={20}
              name="appStoreIcon"
              stroke="white"
            />
          </div>
        </a>
        <a
          className={styles.appStoreLink}
          href="https://apps.apple.com/us/app/nyxo/id1440417031">
          <div>
            <IconRegular
              height={20}
              width={20}
              name="playStoreIcon"
              stroke="white"
            />
          </div>
        </a>
      </div>
    </Card>
  )
}

export default React.memo(GetTheAppCard)

// .cardContainer {
// }

// .title {
// 	font-size: 1.5rem;
// 	font-weight: bold;
// 	margin-bottom: 1rem;
// 	color: white;
// }
// .paragraph {
// 	margin-bottom: 2rem;
// 	color: white;
// }

// .appStoreLink {
// 	display: flex;
// 	flex: 1;
// 	align-items: center;
// 	justify-content: center;
// 	border: 1px solid white;
// 	padding: 0.5rem;
// 	border-radius: 0.5rem;
// 	margin: 0.2rem;
// 	color: white;
// 	transition: 0.3s ease-in-out border;

// 	&:hover {
// 		border-color: $radiantBlue;
// 		color: $radiantBlue;
// 		svg {
// 			stroke: $radiantBlue;
// 		}
// 	}
// 	div {
// 		display: flex;
// 		flex: 1;
// 		align-items: center;
// 		justify-content: center;
// 		color: white;
// 		svg {
// 			stroke: currentColor;
// 		}
// 	}
// }
