import PropTypes from 'prop-types';
import styles from './suggestionsBox.module.scss';

const SuggestionsBox = ({ data, action }) => {
  if (!data) return 'loading..';

  return (
    <div className={styles.suggestions}>
      {data.map((slug, i) => (
        <div
          className={styles.suggestionTag}
          key={i}
          onClick={action}
          role="button"
        >
          {slug}
        </div>
      ))}
    </div>
  );
};

export default SuggestionsBox;

SuggestionsBox.propTypes = {
  data: PropTypes.object,
  action: PropTypes.func,
};
