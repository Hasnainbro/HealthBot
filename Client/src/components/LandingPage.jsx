import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <section className="h-screen w-full">
        <div className=" flex pt-4">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAA81BMVEX////qJij29vb9/////vz//f/8///aJy34+PjpJyfrJSTrJCb09PTeICjZIyX//v377ObmKCvfHCHsIiL7//vgAADnKCXwIyjsJC7iIirOJSv/7/HZAADlKSbmFBniXGj85er/9PHaCgrvzc3qpaLcAADjdnjy1dXx1tDlkJHbPUPnFBrbNjXvycbdGBvcgYn85uHqPT7+9u7tvbrXd3zgTlnhZWXeWl7mABDnl53fQkPx//320dfVGBzwt7nnqrDkn5nfRkblfnzib2zu3NvjjpXoPEHrNTblPjHPBwnihIPuVFnleoPKLCrnRD/dhX30OkGkCWX/AAAM00lEQVR4nO2dC3vaOBaGZcuSb4AwFtiU4slSCklNXZjZJiaXJu1S0slkM/v/f80eyRAIwWlzm9it3qdNwdjUXySdc3R0MUIKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQvH8YMMQ/xCC8PIIIstX9GXu6Z8Ccw4asSQ7IKHi4Avf2rPDlj8IYoxSypg8YkBFQPjnVk8pohxKGGo3Y52dnZ2OwbBQTY/oz17nhc7fd/+Y/vtju/f6bbPZfPu6Z368nP6x+y/20vf2PDDRnjnUcGwN+/ujXhpFke+6rqZp8NOPozjtjfb7QzgPzkGEcuOlb/nJAEEYarTx/sO7XhoLybew3TjujS7eWEI8+4lqP8cEo/HeYZr6mmNvk67JKhCkzcO9McKE/TzaiUWHg0bk25rnaZqXJx4+tJ0oGQz50Uvf8dOBhwdp7Lhh23ODAAo4p9wD12uHjhOnB7tlL3d5/5xhPh70/JZUDH89292uHSqFJu2f3Yp7gzHFBsfLbykjnIHNniZRTknn4kaNKeeE8ZcW8AgIpm8OU+eeyoV4Jz18QzH5/n9RTAxKjshe4rdyjdtddONkyo4ILaen5wR1DiI7AON9b+WOHQZ2dNBBpHTaociJQfGxGYHbumHXXbcdCpOurdy8rQVa1ws9J1hVENu14YRodCx6d4SVqZNjQD8d4U9Ja9OmC3lOmiZA4xp4kwqj4AU3T3b91sknSjgqVfdWdEjRac/3tI0oDorXN/s79U12Tk3fCzcqPng9v3cK31Qum8cNOm0GEMtsaA9D3zzGNzvqsg8L7eO2eDhfa55BJ/+lZDwEKKizyO+GbmtTTDfqU+itLfM1i/wNdN9oP25thgE2mAAn6os2VA4wMQxGT5uOiOBudVz8Rp2ucnXX1yDG69XbZ7uO5jnNU8q4QcoQ4GFECf301t3q1V2nxrY2XmwY1W0XQE1x34LBK0WcA7dJ0PFJrAXbOqug3bifdnCH8ckxKoFyJNKORzsj27OdbUF8vnaWp921PWfUOSJGCRydgdl+7Gr21hzF/bVDr951432GSxDgcEKnUXjbbGXYTnW7doRYLa+3Z7taNMVG8Y2dwYdJblpKat9afgyRXO2i8JNhCXo1hH+Ot5q5x2j3wvgvWnxzR6dp93Z89kjtrdBrTotf58eJo2018Y/R7mphqzr+p6XcB4NyhgeRq/lPXe6iGxwPMMR2RW30HGzxbu/O3NxDtQv5vV0LFzZ1STHm+/GdAh6hXYv3OSnuUC3Gu+mtntuTaW9Fu6ywxh4ir8s437c/Vrsdfylsc4c632nnm7lHaxf9X1zUjD2l/eg7KdlHaQ+ifmFTOJh89sO7BTxKe+h/5kVt73TY1NrPqN0DN/dPa/pR8F4K9/ds2l1PS78W0Mdh0cXE74KFdDvYknOV9+82clw0Rg13u7EIlykg1/PfFTC6wQajaKenednYiuuFYTdwtxA20HZTzVEj3HZB0A3DxW8Uvrs3Bu1FG6rAYID74NwX2jXPj6vmbWrtVzkDy5y9ate2XFGNfG8xqhWAiz9FBPGCaeeYGv+5Dmzaml/r15lxG8xy3BQcx1suYPV+zYfv02T6RnRo6K0M9wvDDMR/H2nLIajQqR5Dp26Ldg7St4mHo5RvOZ9xelx1wkVl0txRAVNXBNFx71q7lp6JWWXrgy+LIRgif09ITBxms+FsNiNZ6zWY+A55yo3zMXRfpunKT/TGFBWt4MH+vl+7xWj2vSlyHH3tJUny53TD9ln6RrWgeBatOgnpe1w06WJicD9aubKk/r150Rhfpo7bSi9u+DwdlFv6jfMorierwemoX0DtiH5YaQ+S+ne7XHgQh2EYX6zXD51ZlYqOKuvnGeiG9g+F086gXf4Wr5X7+HvaGRqkrhdEF+v5esuqQLlXLGvtRAONk1XEF/2W+dMiAdoP/YUXzrTfUTrgoKGefIkCB7QLn0cyNczSLb0CPza1r4I8iOwKNyILZZHF4yKc9ew7tcuhNUwHkdbVogto0HQxhVBor4hiX9fObmh3a4Uz82C6yEmmHfpbk8lJ/Y5zydfLATC3w1rYmouXg69ZC4GmDg2+cpf2k+LNPMKs01i2Su9qZI63hzCSWS+O4zTqtoIg6PpRlEZpb1cXekE0/FtZl76pPekUTjujnewOg64od9Bu5Bq7WQJxf6CFQavVAusQ2O1WbZh5NqjuunXzbHbD1rlRhxfM1GXaXWjsJggX2g2rkhWlrlvyZi3xSrzAs9F5u3o+MjUXYtVW15vMvQZo18XnTNezi3SmZ+cbeGxOzldRE2gvWMFn2jXtfGKORlegnVeEp4YqrGclCb8JoR5eWcOaOZ+b55OJZzu2O5+fm1cnQyw/ZvIXJH7o4nxRGTiZmebkajn5DrQXzdjJ9m4HtUkVCn0O2oWnqkDT1aUIZEkpQotlzUw7Sb59q43MwLft8+j8m/3nUH5aQbKwxSXLP1L7BNQv1hwkncIFN9LOd4Or2pXZbk9G5kxGKFBvrcxfyxpd0UXQZlnTDxdfLvb+8iZdr/tx7+LDxeVUfCjMe6ZYXqPrwtuRijX+71V1Ymbawc4XTzv498C2r8xJGAg7P5P1e3H/lgjUF2/hVYUfHVGKL2rzrhftifVylOtZ3VhoFy8qVvaios/AgoyqwbV/L5x2gt/54N3MKy2ofYM6r69pR6K5y7dQ7nqlwkVLwF+qcztI/z7iFiac6+ITaO+yrSzqvdAO5T6bg2kAW9KC2ME5FOuOCoWM5yPwbqJpQg2tjXXZtoUQqV7qEJKFwqwCfGnMNS/5mwtTCHKFeauwVbnry3K36q/Mtqd1q+deFs8XbYBC9uMCYeYnk+po0hhXpMOWAuCljNQlS+06vmzM24fnF0fSscNRUUXQbe06GZv/m0+0EKyI5xawH4cYgf6763rnwiRPaslYWHk4rC/rsAjVpa0TFUKoopeNSXLV+JAFsFZWKdDCt4n2nr0gRmVsmubc80ZCe1rA/jvG9H0q0ittUN+2012iZ33Tip4FLZnxqmQWDY5yfPbKTMzq2SJvk0nPYhtoEOI9IuJCjobtiQhuzs2q5qbvceHG4EW+7rUnF7m5rm2nZyLRlmXfkEzcoWW+brHqG3pzM4GRmS55kGSnyY+vM3eUTlMtlIvH4M/rAubrwAIZa3lat/pmkXZlj8vTwgXHtWWeFsx8AfO0jEMxreXnwyfNz3vL/LztFzE/LxptP12Oyzih50dPNC4Tb4zLoKKNSYm1D2h8PR7neKHWlYHYo8bjsj7xjfG4WfHG47AYH70xDrux5mnZ/b73OKythcvvKug4rOQXHX+X/NLzLqxfeL4NhLXPOccsiPpFG5a4hj/z/DqnUadFnV9niHmVz6ddzKss7kqxZ59Piwq7VgxijuedR01J4cbilhjUsJ5z/vywiF24BdATI3LdRP7+PQ/ULqYZRQOIZouWrrpJPfG1/Db/0PUy3bDVKPR6GcmzrJPSQjstwTopuT7uqbXbENLlracsEIwPkztEPHRdZGNY/GJHlGGxHjanyT9oPWxLroctwyZHDLP9yM9ZDPyAddBg5J1on5RhHbRY/94ZtewnW//uwFeVZP37at+D+2n/KfY9yPa76D3Zfhee2yvLfhdynxMi9jnR7rPPCeL1xqZrtDVXbO/TPKWkJPucCEDLWZq/vw3nhrGaKy0GIDim/bi7eXLLD8QI3EuruR/YoHT69gf3NUJyAOpNzdduFbwdak34XZUgrFlBMDTQ016cs5/V+NZ+VuO+2NJpw0Qs97NipWjrS0C5gWnuPmZRY5MobXnhrX3M3NbJJ0x4uTatNMAnGRYdmpHcnNNe19MOwQgGa8fkOztsO2tDE3a2u8nomIJbL9okkx+AE1Q/SKGJ523KegeuFwZOdLBTwn0LJcYRPjKmSZyzTPBuwq7/5x45IsVOVuSCCSOYDt81H7JPqZ9+FvuU0pIEdJsQOZmAWtOGf//9aZMppxAkiQ3rywiVjxIwGJX7Ei9tW96+xCvjZ7f83mDMZU62VN5tK3j3II394O79qOGjn2c/6hXEoruDJIbALX8fck/uQ675UWOwS63SF/c1XEym2tk7bN6RvxaH3bh5ON0R81NLkKP5QcRzBzCl1puLw/znDvjL5w7Ibaxf+pafDGZQJPYGwJgsnjcRx85iPo3rOnEcLZ83IQDPmL/WpsSIOUm/7/6x9++P5uI5I71k8ZyRcgZw94CKtkzlnEnGOp2dTofIWZf0V3i+jCFq/vK5QiKJweSycPwLPFcIMc7J6nlSTORvaFYPCjZr7unB4rE5QmSWsxPziuU7kn34ovemUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKH4R/g/9cibJ8W2fLwAAAABJRU5ErkJggg=="
              alt=""
              className=" h-20 w-20 object-cover"
            />
          </div>
          <div>
            <h2 className=" font-bold text-xl mt-7">HealthMate</h2>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-28">
          <h1 className=" font-bold text-3xl">
            Revolutionizing Healthcare with AI-Powered Assistance
          </h1>
        </div>
        <div className=" flex justify-center mt-6">
          <Link to={"/login"}>
            {" "}
            <button className=" bg-black text-white px-5 py-3 rounded-xl text-lg hover:bg-slate-600">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
