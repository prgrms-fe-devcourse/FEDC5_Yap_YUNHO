/**
 *  /^ : 문자열의 시작을 나타냅니다.
 *  [a-zA-Z0-9._%+-]+ : 이메일 주소의 로컬 파트(골뱅이(@) 이전 부분)에 해당하는 부분입니다. 알파벳 대소문자, 숫자, 밑줄(_), 마침표(.), 퍼센트(%), 더하기(+), 그리고 하이픈(-)이 1개 이상 포함될 수 있습니다.
 *  @ : 이메일 주소의 로컬 파트와 도메인 파트를 구분하는 골뱅이 기호입니다.
 *  [a-zA-Z0-9.-]+ : 이메일 주소의 도메인 파트(골뱅이(@) 이후 부분)에 해당하는 부분입니다. 알파벳 대소문자, 숫자, 마침표(.), 그리고 하이픈(-)이 1개 이상 포함될 수 있습니다.
 *  \. : 도메인 파트의 마지막을 나타내는 마침표(.)입니다. 마침표는 정규표현식에서 특수 문자로 사용되기 때문에 역슬래시()를 사용하여 이스케이프 처리합니다.
 *  [a-zA-Z]{2,} : 도메인 파트의 최소 2자 이상의 알파벳 대소문자를 나타냅니다.
 *  $ : 문자열의 끝을 나타냅니다.
 */
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
