package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/antchfx/xquery/html"
	"golang.org/x/net/html"
)

type Node struct {
	Min  float64 `json:"min"`
	Max  float64 `json:"max"`
	Text string  `json:"text"`
}

var prev = 0.0
var multiplier = 1.0

func main() {
	// Load XML document from file.
	f, err := os.Open(`./tabla2.xml`)
	if err != nil {
		panic(err)
	}
	// Parse XML document.
	doc, err := htmlquery.Parse(f)
	if err != nil {
		panic(err)
	}

	nodes := make([]Node, 0, 100)
	for _, n := range htmlquery.Find(doc, "//div[@pivot]/parent::div") {
		nodes = append(nodes, parseNode(n))
	}

	data, err := json.MarshalIndent(nodes, "", "\t")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(data))
}

func parseNode(parent *html.Node) Node {
	node := parent.FirstChild.NextSibling

	data := htmlquery.InnerText(node)
	data = strings.Replace(data, ",", ".", -1)
	parts := strings.Split(data, "-")

	min, err := strconv.ParseFloat(strings.TrimSpace(parts[0]), 64)
	if err != nil {
		fmt.Println(data)
		panic(err)
	}
	max, err := strconv.ParseFloat(strings.TrimSpace(parts[1]), 64)
	if err != nil {
		fmt.Println(data)
		panic(err)
	}

	if max < min {
		panic("max can not less than min")
	}
	if prev/100 > min {
		multiplier *= 1000
	}
	prev = min

	message := ""
	node = node.NextSibling
	for ; node != nil; node = node.NextSibling {
		message += strings.TrimSpace(htmlquery.InnerText(node)) + " "
	}
	message = strings.TrimSpace(message)

	return Node{
		Min:  min * multiplier,
		Max:  max * multiplier,
		Text: message,
	}

	// for {
	// 	node = node.NextSibling
	// 	if node == nil {
	// 		break
	// 	}
	// 	//fmt.Println(node)
	// }
}
