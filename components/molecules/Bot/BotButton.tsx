import { motion } from 'framer-motion';
import styles from './botButton.module.scss';
import { useStateContext } from '../../../store/store';

function BotButton({ toggle, reference }) {
  const { isDarkTheme } = useStateContext();

  return (
    <motion.div
      className={styles.botButton}
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      ref={reference}
      variants={{
        closed: { opacity: 1, x: 0 },
        open: { opacity: 0, x: 100 },
      }}
    >
      {/* <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg> */}
      <svg
        width="1662"
        height="1066"
        viewBox="0 0 1662 1066"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M833.473 0.651199C674.704 0.651199 516.304 54.7852 387.304 163.027C309.663 228.176 246.721 157.158 205.047 243.962C199.263 243.411 193.635 242.157 187.697 242.157C83.9968 242.157 0.5 325.652 0.5 429.35V660.708C0.5 764.404 83.9968 847.9 187.697 847.9C193.635 847.9 199.263 846.612 205.047 846.095C212.508 861.561 220.229 876.913 228.93 891.994C262.944 952.702 353.817 900.725 318.726 840.627C175.05 591.769 233.628 426.711 453.749 242.007C673.875 57.2972 993.608 57.2972 1213.73 242.007C1433.86 426.711 1486.56 591.764 1342.89 840.627L1341.34 843.204L1340.3 845.78C1340.3 845.78 1331.5 863.059 1304.86 892.127C1265 942.5 1262.5 934 1229.5 952L1132.94 982.5C1082.81 982.5 1061.5 982.5 1038.5 1014C1020.26 1038.97 1040.4 1065.36 1085.31 1065.36L1323.5 965C1368.5 942 1385.5 928 1395.5 915L1412.5 898C1421.12 883.051 1441.09 870.889 1448.5 855.559C1454.54 856.11 1467.65 847.751 1473.87 847.751C1577.57 847.751 1661.07 764.257 1661.07 660.559V429.201C1661.07 325.505 1577.57 242.008 1473.87 242.008C1467.88 242.008 1462.23 242.999 1456.39 243.813C1414.82 157.004 1357.93 228.03 1280.27 162.876C1151.28 54.6348 992.214 0.5 833.439 0.5L833.473 0.651199ZM608.393 325.451C568.094 322.819 531.284 331.341 499.119 365.212C413.345 455.514 356.884 432.222 356.884 563.113C356.884 671.078 392.966 792.055 453.749 796.47C540.344 802.768 676.994 745.903 830.806 745.903C993.802 745.903 1137.64 809.708 1222.94 794.603C1274.63 785.465 1304.86 661.893 1304.86 563.113C1304.86 432.222 1255.22 455.514 1169.44 365.212C1083.67 274.907 965.166 365.212 834.279 365.212C752.474 365.212 675.554 329.86 608.393 325.451ZM585.711 545.212C633.527 545.231 672.287 440.578 672.303 488.397C672.287 536.214 633.527 574.971 585.711 574.989C537.894 574.971 499.134 536.214 499.119 488.397C499.134 440.578 537.894 545.231 585.711 545.212ZM1075.91 545.212C1123.73 545.231 1162.49 440.578 1162.5 488.397C1162.49 536.214 1123.73 574.971 1075.91 574.989C1028.09 574.971 989.336 536.214 989.317 488.397C989.336 440.578 1028.09 545.231 1075.91 545.212Z"
          fill="#4D4D4D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M833.473 0.651199C674.704 0.651199 516.304 54.7852 387.304 163.027C309.663 228.176 246.721 157.158 205.047 243.962C199.263 243.411 193.635 242.157 187.697 242.157C83.9968 242.157 0.5 325.652 0.5 429.35V660.708C0.5 764.404 83.9968 847.9 187.697 847.9C193.635 847.9 199.263 846.612 205.047 846.095C212.508 861.561 220.229 876.913 228.93 891.994C262.944 952.702 353.817 900.725 318.726 840.627C175.05 591.769 233.628 426.711 453.749 242.007C673.875 57.2972 993.608 57.2972 1213.73 242.007C1433.86 426.711 1486.56 591.764 1342.89 840.627L1341.34 843.204L1340.3 845.78C1340.3 845.78 1331.5 863.059 1304.86 892.127C1265 942.5 1262.5 934 1229.5 952L1132.94 982.5C1082.81 982.5 1061.5 982.5 1038.5 1014C1020.26 1038.97 1040.4 1065.36 1085.31 1065.36L1323.5 965C1368.5 942 1385.5 928 1395.5 915L1412.5 898C1421.12 883.051 1441.09 870.889 1448.5 855.559C1454.54 856.11 1467.65 847.751 1473.87 847.751C1577.57 847.751 1661.07 764.257 1661.07 660.559V429.201C1661.07 325.505 1577.57 242.008 1473.87 242.008C1467.88 242.008 1462.23 242.999 1456.39 243.813C1414.82 157.004 1357.93 228.03 1280.27 162.876C1151.28 54.6348 992.214 0.5 833.439 0.5L833.473 0.651199ZM608.393 325.451C568.094 322.819 531.284 331.341 499.119 365.212C413.345 455.514 356.884 432.222 356.884 563.113C356.884 671.078 392.966 792.055 453.749 796.47C540.344 802.768 676.994 745.903 830.806 745.903C993.802 745.903 1137.64 809.708 1222.94 794.603C1274.63 785.465 1304.86 661.893 1304.86 563.113C1304.86 432.222 1255.22 455.514 1169.44 365.212C1083.67 274.907 965.166 365.212 834.279 365.212C752.474 365.212 675.554 329.86 608.393 325.451ZM585.711 545.212C633.527 545.231 672.287 440.578 672.303 488.397C672.287 536.214 633.527 574.971 585.711 574.989C537.894 574.971 499.134 536.214 499.119 488.397C499.134 440.578 537.894 545.231 585.711 545.212ZM1075.91 545.212C1123.73 545.231 1162.49 440.578 1162.5 488.397C1162.49 536.214 1123.73 574.971 1075.91 574.989C1028.09 574.971 989.336 536.214 989.317 488.397C989.336 440.578 1028.09 545.231 1075.91 545.212Z"
          fill="#4D4D4D"
        />
      </svg>
    </motion.div>
  );
}

export default BotButton;
