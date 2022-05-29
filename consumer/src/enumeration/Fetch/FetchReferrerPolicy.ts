enum EnumFetchReferrerPolicy {
  NORF        = 'no-referrer',
  NORFRWD     = 'no-referrer-when-downgrade',
  ORGN        = 'origin',
  ORGNWCROR   = 'origin-when-cross-origin',
  SMOR        = 'same-origin',
  STOR        = 'strict-origin',
  STORWCROR   = 'strict-origin-when-cross-origin',
  UNSFURL     = 'unsafe-url'
}

export default EnumFetchReferrerPolicy;
