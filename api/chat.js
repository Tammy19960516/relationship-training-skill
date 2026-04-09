export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { provider, apiKey, system, messages, maxTokens } = req.body;

  try {
    let response, data;

    if (provider === 'anthropic') {
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: maxTokens || 400,
          system,
          messages
        })
      });
      data = await response.json();
      if (!response.ok) return res.status(response.status).json({ error: data.error?.message || '请求失败' });
      return res.json({ text: data.content[0].text });

    } else if (provider === 'openai') {
      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          max_tokens: maxTokens || 400,
          messages: [{ role: 'system', content: system }, ...messages]
        })
      });
      data = await response.json();
      if (!response.ok) return res.status(response.status).json({ error: data.error?.message || '请求失败' });
      return res.json({ text: data.choices[0].message.content });

    } else if (provider === 'deepseek') {
      response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          max_tokens: maxTokens || 400,
          messages: [{ role: 'system', content: system }, ...messages]
        })
      });
      data = await response.json();
      if (!response.ok) return res.status(response.status).json({ error: data.error?.message || '请求失败' });
      return res.json({ text: data.choices[0].message.content });
    }

    return res.status(400).json({ error: '不支持的 provider' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
