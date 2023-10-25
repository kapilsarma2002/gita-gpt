import { OpenAI } from 'openai'
import { StructuredOutputParser } from 'langchain/output_parsers'
import { PromptTemplate } from 'langchain/prompts'
import { Document } from 'langchain/document'
import { loadQARefineChain } from 'langchain/chains'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import z from 'zod'
const apiKey = process.env.OPENAI_API_KEY
//console.log('API Key is : ', apiKey)

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    ques: z
      .string()
      .describe('the question of the person who is reading the verse.'),
    ans: z.string().describe('the answer to the question asked by the user.'),
    /*negative: z
      .boolean()
      .describe(
        'is the journal entry negative? (i.e. does it contain negative emotions?).'
      ),
    summary: z.string().describe('quick summary of the entire entry.'),
    color: z
      .string()
      .describe(
        'a hexidecimal color code the represents the mood of the entry. Example #0101fe for blue representing happiness.'
      ),
    sentimentScore: z
      .number()
      .describe(
        'sentiment of the text and rated on a scale from -10 to 10, where -10 is extremely negative, 0 is neutral, and 10 is extremely positive.'
      ),*/
  })
)

const getPrompt = async (content) => {
  const format_instructions = parser.getFormatInstructions()

  const prompt = new PromptTemplate({
    template:
      'Analyze the following question. Follow the intrusctions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}',
    inputVariables: ['entry'],
    partialVariables: { format_instructions },
  })

  const input = await prompt.format({
    entry: content,
  })

  return input
}

export const analyze = async (content) => {
  //const input = await getPrompt(content)
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  })
  const result = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 
          'You are an AI assitant, answer the questions to the best of your ability.'
      },
      {
        role: 'user',
        content: `${content}`
      }
    ]
  })

  //const result = await openai.call(content)
  console.log('Result is : ', result)

  /*try {
    return parser.parse(result)
  } catch (e) {
    console.log(e)
  }*/
}
