import { connect } from 'react-redux'
import { injectIntl, InjectedIntl } from 'react-intl'
import { setI18n } from 'modules/translation/utils'
import { TranslationSetupProps } from 'components/TranslationProvider/TranslationSetup/types'

import TranslationSetup from './TranslationSetup'

const mapState = (_: any, ownProps: TranslationSetupProps) => ownProps

const mapDispatch = () => ({
  setI18n: (intl: InjectedIntl) => setI18n(intl)
})

export default injectIntl<any>(
  connect<TranslationSetupProps>(mapState, mapDispatch)(TranslationSetup)
)
