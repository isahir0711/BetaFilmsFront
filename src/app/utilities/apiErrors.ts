export function parseAPIErrors(response: any): string[] {
    const result: string[] = [];
  
    //console.log(response.status);
  
    if (response.status === 500){
      result.push('there was an error, try again later');
      return result;
    }
  
    if (response.error) {
      if (typeof response.error === 'string') {
        result.push(response.error);
      } else if (Array.isArray(response.error)){
        response.error.forEach((value: { description: string; }) => result.push(value.description));
      } else {
        const mapaErrores = response.error.errors;
        const inputs = Object.entries(mapaErrores);
        inputs.forEach((arr: any[]) => {
          const campo = arr[0];
          arr[1].forEach((errorMessage: any) => {
            result.push(`${campo}: ${errorMessage}`);
          });
        });
      }
    }
  
    return result;
  }