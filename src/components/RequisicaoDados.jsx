import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]); // estado pra armazenar os posts
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar os posts
  const fetchPosts = async () => {
    setLoading(true); 
    setError(null); 
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Faz a requisição
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Falha ao carregar os posts');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-list-container">
      <h2>Lista de Posts</h2>

      {loading && <p>Carregando...</p>} {/* Indicador de carregamento */}

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe erros se houver */}

      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Recarregando...' : 'Recarregar Posts'}
      </button>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
