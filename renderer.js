console.log('Renderer script loaded');

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // 打印 'pong'
}

func()