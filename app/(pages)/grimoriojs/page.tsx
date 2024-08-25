/* eslint-disable react/no-unescaped-entities */
export default function GrimorioJS() {
    return(
        <section>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold"> 24/08/2024 - MouseEvent, createElement e remove()</h1>
                <p className="text-2xl">Ao manipular o objeto MouseEvent aprendi sobre as seguintes propriedades:</p>
                <ul className="list-decimal ml-6 text-2xl">
                    <li><strong>screenX/Y:</strong> posição do mouse em relação ao canto superior esquerdo da tela.</li>
                    <li><strong>clientX/Y:</strong> posição do mouse em relação ao contato superior esquerdo da janela visível do navegador.</li>
                    <li><strong>offsetX/Y:</strong> posição do mouse em relação ao canto superior esquerdo do elemento que dispara o evento.</li>
                </ul>
                <p className="text-2xl">O método <strong>remove()</strong> remove um elemento do DOM.</p>
                <p className="text-2xl">O método <strong>createElement()</strong> cria uma elemento no DOM, mas não o vincula. Por exemplo, <strong>createElement("span")</strong> cria um span mas não anexa ao DOM até um outro método, como por exemplo, appendChild(body) ser chamado.</p>
            </div>
        </section>
    )
}