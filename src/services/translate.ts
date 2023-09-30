import { Configuration, OpenAIApi } from 'openai';
import { SUPPORTED_LANGUAGES } from '../constants';
import { FromLanguage, Language } from '../types';


const apiKey = import.meta.env.VITE_OPENAIA_API_KEY;

const configuration = new Configuration ({  apiKey });
const openai = new OpenAIApi(configuration);

export async function translate ({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
}) {
    const messages =  [
        {
            role: 'system',
            constent: 'You are a AI that translate text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{ `and` }}`. You can also recive {{auto}} which means you have to detect the language.0 The lenguage you translate to is sourrounded by `[[` and `]]`. '
        }
    ]
}