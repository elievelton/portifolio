import { db } from '../../firebase/db';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const handleVisits = async (req, res) => {
  try {
    console.log("handleVisits chamado!");  
    console.log("Método HTTP:", req.method);  

    const docRef = doc(db, 'siteMetrics', 'O3MvlukJewaAkN7GuZO4');
    
    if (req.method === 'POST') {
      console.log("Entrando na lógica POST");

      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("Document does not exist!");
      }

      const currentCount = docSnapshot.data().count;
      console.log("Contagem atual:", currentCount);  

      await updateDoc(docRef, {
        count: currentCount + 1
      });
      
      console.log("Nova contagem:", currentCount + 1);  

      res.status(200).json({ count: currentCount + 1 });
    } else if (req.method === 'GET') {
      console.log("Entrando na lógica GET");

      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error("Document does not exist!");
      }

      console.log("Contagem atual:", docSnapshot.data().count);  

      res.status(200).json({ count: docSnapshot.data().count });
    } else {
      console.log("Método HTTP não permitido:", req.method);  
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error("Erro ao processar a requisição:", error.message);  
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

export default handleVisits;