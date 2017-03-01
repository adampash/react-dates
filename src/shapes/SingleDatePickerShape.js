import { PropTypes } from 'react';
import momentPropTypes from 'react-moment-proptypes';

import OrientationShape from '../shapes/OrientationShape';
import anchorDirectionShape from '../shapes/AnchorDirectionShape';

export default {
  // required props for a functional interactive SingleDatePicker
  date: momentPropTypes.momentObj,
  onDateChange: PropTypes.func.isRequired,

  selected: PropTypes.bool,
  onSelectChange: PropTypes.func.isRequired,

  // input related props
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  screenReaderInputMessage: PropTypes.string,
  showClearDate: PropTypes.bool,

  // calendar presentation and interaction related props
  orientation: OrientationShape,
  anchorDirection: anchorDirectionShape,
  horizontalMargin: PropTypes.number,
  withPortal: PropTypes.bool,
  withFullScreenPortal: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  numberOfMonths: PropTypes.number,
  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDate: PropTypes.bool,

  // navigation related props
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,

  // day presentation and interaction related props
  renderDay: PropTypes.func,
  enableOutsideDays: PropTypes.bool,
  isDayBlocked: PropTypes.func,
  isOutsideRange: PropTypes.func,
  isDayHighlighted: PropTypes.func,

  // internationalization props
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  monthFormat: PropTypes.string,
  phrases: PropTypes.shape({
    clearDate: PropTypes.node,
    closeDatePicker: PropTypes.node,
    jumpToPrevMonth: PropTypes.node,
    jumpToNextMonth: PropTypes.node,
    keyboardShortcuts: PropTypes.shape({
      showKeyboardShortcutsPanel: PropTypes.node,
      hideKeyboardShortcutsPanel: PropTypes.node,
      enterKey: PropTypes.node,
      leftArrowRightArrow: PropTypes.node,
      upArrowDownArrow: PropTypes.node,
      pageUpPageDown: PropTypes.node,
      homeEnd: PropTypes.node,
      escape: PropTypes.node,
      questionMark: PropTypes.node,
      selectFocusedDate: PropTypes.node,
      moveFocusByOneDay: PropTypes.node,
      moveFocusByOneWeek: PropTypes.node,
      moveFocusByOneMonth: PropTypes.node,
      moveFocustoStartAndEndOfWeek: PropTypes.node,
      returnFocusToInput: PropTypes.node,
      showKeyboardShortcuts: PropTypes.node,
    }),
  }),
};
